const express = require('express');
const router = express.Router();
const CommentModel = require('../models/comment');
const AutorModel = require('../models/autor'); 
const ImageModel = require('../models/image');
const ArticleModel = require('../models/article');


router.get('/article/:id', async(req, res) => {
   const { id } = req.params;
   // console.log('type id:',typeof id);
   // console.log("idllll:", id);
   const article = await ArticleModel.findById(id);
   console.log('find by id:', article);
   const vars = {
      zagolovok: article.zagolovok,
      keywords: article.keywords,
      article: article.article,
      price: article.price,
   };
   res.render('article', {vars: vars});
});
// router.get('/article', (req, res) => {
//    res.render('article');
// });


module.exports = router;