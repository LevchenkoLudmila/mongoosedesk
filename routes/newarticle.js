const express = require('express');
const router = express.Router();

router.get('/article/id', (req, res) => {
   res.render('article');
});

module.exports = router;