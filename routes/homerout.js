const express = require('express');
const router = express.Router();

// router.post('/', (req, res, next) => {
//    console.log('hy bebi');
// }); 

// router.get('/', (req, res) => {
//    res.render('index');
// });
router.get('/', (req, res) => {
   res.render('formadd');
});

module.exports = router;