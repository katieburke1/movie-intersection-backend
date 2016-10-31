var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'movie-intersection-backend'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:new-password@localhost/movie_intersection_backend_development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'movie-intersection-backend'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:new-password@localhost/movie-intersection-backend-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'movie-intersection-backend'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://root:new-password@localhost/movie-intersection-backend-production'
  }
};

module.exports = config[env];
