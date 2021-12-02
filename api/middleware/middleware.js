function logger(req, res, next) {
  // DO YOUR
  const timestamp = new Date().toLocaleString()
  const method = req.method
  const url = req.originalUrl
  console.log(`log: ${timestamp} / ${method} / ${url}`);
  next();
}

function validateUserId(req, res, next) {
  // DO YOUR
  console.log("validateUserId");
  next();
}

function validateUser(req, res, next) {
  // DO YOUR
  console.log("validateUser");
  next();
}

function validatePost(req, res, next) {
  // DO YOUR
  console.log("validatePost");
  next();
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
};
