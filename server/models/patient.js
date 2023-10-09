const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  // Define patient schema fields
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = { Patient};

