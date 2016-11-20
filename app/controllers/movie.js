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
    title: req.body.movie.title,
    year: req.body.movie.year,
    imdbrating: req.body.movie.imdbrating,
  }).then(function(movie){
    res.json(movie);
  }).catch(function (error) {
    res.json(error);
  })
});

router.delete('/:id', function (req, res, next) {
    let id = req.params.id
    db.Movie.destroy({ where: { id: id }}).then(function(movie){
      res.json(movie);
    }).catch(function (error) {
      res.json(error);
    })
});
