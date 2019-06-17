var jwt = require('jsonwebtoken');
const fs = require("fs");

let publicKey = fs.readFileSync('keys-public.pem');

const userTypes = {
    NormalUser: 1,
    Admin: 2
};

const hasAccess = (userType) => {
    const authMiddlerWare = (req, res, next) => {
        const token = (req.headers['authorization'] || "").split(" ")[1];
        jwt.verify(token, publicKey, function (err, decoded) {
            if (err || userType == userTypes.Admin && !decoded.isAdmin) {
                res.status(401).send();
            }
            req.userId = decoded._id;
            next();
        });
    }
    return authMiddlerWare;
}

module.exports = {
    isAdmin: hasAccess(userTypes.Admin),
    isUser: hasAccess(userTypes.NormalUser)
};
