var path = require('path');

exports.middleware = function (req, res, next) {
  var base = "en",
      lang = req.query.lang || base;
  try {
    res.locals.i18n = require(path.join(__dirname, lang)).i18n;
  } catch (err) {
    console.error(err);
    res.locals.i18n = require(path.join(__dirname, base)).i18n;
  }
  next();
};