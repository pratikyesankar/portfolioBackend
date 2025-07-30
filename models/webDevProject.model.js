const mongoose = require("mongoose");

const webDevProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  demoLink: String,
  codeLink: String,
  image: String
});

module.exports = mongoose.model("WebDevProject", webDevProjectSchema);
