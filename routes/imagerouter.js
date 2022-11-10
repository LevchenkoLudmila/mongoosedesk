app.get('/upload', (req, res) => {
   imgModel.find({}, (err, items) => {
       if (err) {
           console.log(err);
           res.status(500).send('An error occurred', err);
       }
       else {
           res.render('index', { items: items });
       }
   });
});