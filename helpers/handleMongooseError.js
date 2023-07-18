const handleMongooseError = (error, data, next) => {
  console.log(error.name);
  console.log(error.code);
  error.status =
    error.name === "MongoServerError" && error.code === 11000 ? 409 : 400;
  next();
};

module.exports = handleMongooseError;
