const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) throw err;
  console.log('Mongoose successfully connected');
});

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
