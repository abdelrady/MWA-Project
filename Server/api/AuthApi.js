const fs = require("fs");
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = require("express").Router();
const User = require("../model/User");

const saltRounds = 10;
//http://travistidwell.com/jsencrypt/demo/
let privateKey = fs.readFileSync("keys-private.pem", 'utf8');
let publicKey = fs.readFileSync('keys-public.pem');

const authMiddlerWare = (req, res, next) => {
    const token = (req.headers['authorization'] || "").split(" ")[1];
    jwt.verify(token, publicKey, function (err, decoded) {
        if (err) res.status(401).send();
        console.log(decoded._id);
        req.userId = decoded._id;
        next();
    });
}

router.post("/signup", async (req, res, next) => {
    // TODO make sure password & confirm-password are equal
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    let user = new User({
        password: hash,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        cartItems: []
    });
    await user.save();
    res.status(201).end();
});

router.post("/login", async (req, res, next) => {
    let user = await User.findOne({ "email": req.body.email }, {cartItems: 0});
    if (user) {
        const { cartItems, password, ...publicUser } = user._doc;
        const isValid = await bcrypt.compare(req.body.password, password);
        if (!isValid) res.json({ success: false });
        var signOptions = {
            algorithm: "RS256"
        };
        jwt.sign(publicUser, privateKey, signOptions, function (err, token) {
            console.log(err);
            res.json({ success: !err, token: token });
        });
    } else {
        res.json({ success: false });
    }
});

router.get("/test", authMiddlerWare, (req, res, next)=>{
    res.json({userId: req.userId});
});

module.exports = {isValidUser: authMiddlerWare, router};