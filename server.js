const app = require('./app');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const DB_HOST =
  'mongodb+srv://demonsys:uUrFC9HOa5KQpfkg@cluster0.wzajazq.mongodb.net/contacts-db?retryWrites=true&w=majority';
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
