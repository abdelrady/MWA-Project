const router = require("express").Router();
// const redis = require('redis')

const Image = require("../model/Image");
// const client = redis.createClient();

// create redis middleware
let redisMiddleware = (req, res, next) => {
    let key = "__expIress__" + req.originalUrl || req.url;
    client.get(key, function(err, reply){
      if(reply){
          res.send(reply);
      }else{
          res.sendResponse = res.send;
          res.send = (body) => {
              client.set(key, JSON.stringify(body));
              res.sendResponse(body);
          }
          next();
      }
    });
  };

router.post('/', (req, res) => {
    console.log(req.files); // list of the files
    console.log(req.body); // request body, like email

    let file = req.files.image;

    let img = new Image;
    img.name = file.name;
    img.encoding = file.encoding;
    img.mimetype = file.mimetype;
    img.data = file.data;
    img.size = file.size;
    img.save(function (err, result) {
        if (err) throw err;
        console.error('saved img to mongo');
        console.log(result);
        return res.json({ success: true });
    });
});

router.get('/:id', /*redisMiddleware, */(req, res, next) => {
    Image.findById(req.params.id, (err, doc) => {
        if (err) return next(err);
        res.contentType(doc.mimetype);
        res.send(doc.data);
    });
});

// Global error handler for this module
router.use("*", (req, res, next)=>{
    res.status(500).json({ success: false });
})

module.exports = router;