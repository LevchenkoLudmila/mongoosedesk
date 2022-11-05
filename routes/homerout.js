const express = require('express');
const router = express.Router();

// router.post('/', (req, res, next) => {
//    console.log('hy bebi');
// }); 

router.get('/', (req, res) => {
   res.render('index');
});


module.exports = router;