const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  type: String,
  label: String,
  link: String
});

module.exports = mongoose.model('Contact', contactSchema);
