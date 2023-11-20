import React, { useState, useEffect } from 'react';

const AppointmentScheduler = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch patients and doctors data from the backend API
    // Update patients and doctors state variables
    // Fetch appointments for the logged-in user (patient or doctor) and update appointments state variable
  }, []);

  const handleAppointmentSubmit = () => {
    // Handle appointment submission logic, e.g., send data to the backend API
    // Update appointments state variable with the new appointment
  };

  return (
    <div className="container">
      <h2>Create Appointment</h2>
      <div>
        <label>Select Patient:</label>
        <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
          <option value="">Select Patient</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.id}>
              {patient.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Doctor:</label>
        <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)}>
          <option value="">Select Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Appointment Date:</label>
        <input type="date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
      </div>
      <button onClick={handleAppointmentSubmit}>Schedule Appointment</button>

      <h2>Your Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <strong>Doctor:</strong> {appointment.doctorName} <br />
            <strong>Patient:</strong> {appointment.patientName} <br />
            <strong>Date:</strong> {appointment.date} <br />
            {/* Add more appointment details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentScheduler;
