const app = require('./app');

const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running. Use our API on port: 3000');
    });
    console.log('Database connection successful');
  })
  .catch(error => {
    console.log(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });
