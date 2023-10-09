const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  // Define doctor schema fields
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = { Doctor };
