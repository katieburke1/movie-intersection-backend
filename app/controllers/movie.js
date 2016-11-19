var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/movies', router);
};

router.get('/', function (req, res, next) {
  db.Movie.findAll().then(function (movies) {
    // res.json(movies);
		res.send({movie:movies});
  });
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  // res.json(req.body.title);

   db.Movie.create({
    title: req.body.title,
    year: req.body.year,
    imdbrating: req.body.imdbrating,
  }).then(function(movie){
    res.json(movie);
  }).catch(function (error) {
    res.json(error);
  })
});
