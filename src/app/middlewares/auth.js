const auth = require('basic-auth');

module.exports = (req, res, next) => {
  const user = auth(req);
  console.log(user);
  next();
};
