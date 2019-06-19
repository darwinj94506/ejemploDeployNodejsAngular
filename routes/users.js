var express = require('express');
var router = express.Router();
var db = require('./../bdd.coneccion');

/* GET users listing. */
router.get('/getdatos', function(req, res, next) {
  // res.send('respond with a resource');
  db.any('select * from usuarios')
        .then(function(data) {
            console.log(data);
            res.status(200)
                .json(data);
        })
        .catch(function(err) {
            console.log(err);
            res.status(400).json(err)
        });
});

module.exports = router;
