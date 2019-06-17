const router = require("express").Router();
const Product = require("../model/Product");

router.get("/all", (req, res, next) => {
    Product.find({}, {__v: 0})
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

router.get("/:id", (req, res) => {
    Product.findOne({ _id: req.params.id }, {__v: 0})
        .exec()
        .then(product => product ? res.status(200).json({ success: true, product }) : res.status(200)
            .json({
                success: false,
                message: 'Error finding users'
            }))
        .catch(err => res.status(500)
            .json({
                success: false,
                message: 'Error finding users',
                error: err
            }))

})


router.post("/", async (req, res, next) => {
	let product = new Product({
        ...req.body
    });
	await product.save();
    res.status(201).json({ success: true, product }).end();
});

router.put("/:id", async (req, res, next) => {
    let product = await Product.findOne({_id: req.body._id});
    
    product.name=req.body.name;
    product.tag = req.body.tag;
    product.description = req.body.description;
    product.quantity = req.body.quantity;
    product.price = req.body.price;
    

	await product.save();
    res.status(200).json({ success: true, product }).end();
});

module.exports = router;