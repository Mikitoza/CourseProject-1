var express = require("express");
var router = express.Router();

//Get Category model
var Category = require('../models/category');
var Product = require('../models/product');
var Page = require('../models/page')
//GET
router.get('/',function (req,res){
  Category.find(function(err,categories){
    if(err) return console.log(err);
   Product.find(function(err,products){
    res.render('category',{
      cart:req.session.cart,
      title:'Categories',
      categories : categories,
      products:products
    })
  })
})
  
});

//GET product
router.get('/:slug',function (req,res){

  let slug = req.params.slug;

   Product.findOne({slug:slug},function(err,prod){
    if (err)
    console.log(err);

    res.render('product',{
      cart:req.session.cart ,
      slug:slug,
      title: prod.title,
      category : prod.category,
      desc: prod.desc,
      price: prod.price,
      image: prod.image,
      id: prod._id 
    })
  })
});

//Exports
module.exports = router;