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
