import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    age: '',
    sex: '',
    religion: '',
    occupation: '',
    maritalStatus: '',
    hospitalRegistrationNumber: '',
    phoneNumber: '',
    email: '',
    presentingComplaints: '',
    historyOfPresentingComplaints: '',
    pastDentalHistory: '',
    pastMedicalHistory: '',
    drugHistory: '',
    allergies: '',
    familyHistory: '',
    socialHistory: '',
    generalExamination: '',
    extraoralExamination: '',
    intraoralExamination: '',
    clinicalExaminationImages: null,
    radiographicExaminationImages: null,
    provisionalDiagnosis: '',
    treatmentPlan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend API)
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Patient Information Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        {/* Add other fields similarly */}
        
        {/* Presenting Complaints */}
        <label>Presenting Complaints:</label>
        <textarea name="presentingComplaints" value={formData.presentingComplaints} onChange={handleChange}></textarea>

        {/* Examination Findings */}
        <label>General Examination:</label>
        <textarea name="generalExamination" value={formData.generalExamination} onChange={handleChange}></textarea>

        {/* Image Upload */}
        <label>Clinical Examination Images:</label>
        <input type="file" name="clinicalExaminationImages" onChange={handleImageChange} accept="image/*" />

        {/* Provisional Diagnosis and Treatment Plan */}
        <label>Provisional Diagnosis:</label>
        <textarea name="provisionalDiagnosis" value={formData.provisionalDiagnosis} onChange={handleChange}></textarea>

        <label>Treatment Plan:</label>
        <textarea name="treatmentPlan" value={formData.treatmentPlan} onChange={handleChange}></textarea>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;
