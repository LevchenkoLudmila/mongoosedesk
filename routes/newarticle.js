const express = require('express');
const router = express.Router();

// router.get('/formadd', (req, res) => {
//   res.render('rr');
// });
router.get('/', function (req, res) {
   res.send('Wiki home page');
 })

module.exports = router;