// Example model


module.exports = function (sequelize, DataTypes) {

  var Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    imdbrating: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Movie.hasMany(models.Comments);
      }
    }
  });

  return Movie;
};
