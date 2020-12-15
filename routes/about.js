var express = require("express");
var router = express.Router();

var Page = require('../models/page')
//GET
router.get('/',function (req,res){
  Page.findOne({slug: 'about-us'}, function (err, page) {
    if (err)
        console.log(err);

    res.render('about-us', {
        cart:req.session.cart,
        title: page.title,
        content: page.content,
        slug : page.slug
    });
});
  
});

//Exports
module.exports = router;