if (process.env.NODE_ENV === "production") {
  //We are in production mode, return the prod set of keys
    module.exports = require ('./keys-prod');
} else {
  // We are in development mode, return the dev keys
    module.exports = require('./keys-dev');
}
