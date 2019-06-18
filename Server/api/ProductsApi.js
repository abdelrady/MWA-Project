const mongo = require("mongodb");
const router = require("express").Router();
const Product = require("../model/Product");
const { isAdmin } = require("../middlewares/hasAccess");
const Image = require("../model/Image");

const deleteImage = async (imageId) =>{
    await Image.findOneAndDelete({_id: new mongo.ObjectID(imageId)}).exec();
};

const saveImage = async (res, file, product, isNew)=>{
    if(product.imageId){
        await deleteImage(product.imageId);
    }
    let img = new Image({ ...file });
    img.save(async (err, result) => {
        if (err) res.status(500).json({ success: false }).end();
        product.imageId = result._id;
        await product.save();
        res.status(isNew ? 201 : 200).json({ success: true, product }).end();
    });
};

router.get("/all", (req, res, next) => {
    let filter = req.query.q ? { '$text': { '$search': req.query.q } } : {};
    Product.find(filter, { __v: 0 })
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
    Product.findOne({ _id: req.params.id }, { __v: 0 })
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

router.post("/", /*isAdmin, */async (req, res, next) => {
    delete req.body._id;
    let product = new Product({
        ...req.body
    });
    saveImage(res, req.files.image, product, true);
});

router.put("/:id", async (req, res, next) => {
    let product = await Product.findOne({ _id: new mongo.ObjectID(req.params.id) });

    product.name = req.body.name;
    product.tag = req.body.tag;
    product.description = req.body.description;
    product.quantity = req.body.quantity;
    product.price = req.body.price;

    saveImage(res, req.files.image, product, false);
});

router.delete("/:id", async (req, res, next) => {
    await Product.findByIdAndRemove({ _id: new mongo.ObjectID(req.params.id) });
    res.status(200).json({ success: true });
});

// Global error handler for this module
router.use("*", (req, res, next) => {
    res.status(500).json({ success: false });
})

module.exports = router;