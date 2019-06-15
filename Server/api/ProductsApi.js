const router = require("express").Router();
const Product = require("../model/Product");

router.get("/all", (req, res, next) => {
    Product.find({})
        .sort({ 'name': 1 })
        .exec()
        .then(products => res.status(200).json({ success: true, products }))
        .catch(err => res.status(500)
            .json({
                success: false,
                message: 'Error finding users',
                error: err
            }))
})

module.exports = router;