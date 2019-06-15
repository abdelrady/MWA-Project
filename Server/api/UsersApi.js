const router = require("express").Router;
const User = require("../model/User");

router.get("/", async (req, res, next) => {
    User.find({})
        .sort({ 'name': 1 })
        .exec()
        .then(users => res.status(200).json({ success: true, users }))
        .catch(err => res.status(500)
            .json({
                success: false,
                message: 'Error finding users',
                error: err
            }))
})

module.exports = router;