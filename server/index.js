const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

mongoose.connect('mongodb://your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.get('/', (req, res) => {
  res.json('Hello')
})

app.use(cors());
app.use(bodyParser.json());

// app.use('/api/patients', patientRoutes);
// app.use('/api/doctors', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

