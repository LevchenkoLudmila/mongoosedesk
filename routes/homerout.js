const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.render('index');
   
});

// router.post('/', (req, res, next) => {
//    console.log('hy bebi');
// }); 

module.exports = router;