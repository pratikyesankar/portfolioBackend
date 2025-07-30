const mongoose = require('mongoose');

const techStackSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('TechStack', techStackSchema);
