import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RegisterVisit = ({ onRegister }) => {
  const [patientAddress, setPatientAddress] = useState('');
  const [timestamp, setTimestamp] = useState(new Date());
  const [doctorAddress, setDoctorAddress] = useState('');
  const [complaints, setComplaints] = useState('');
  const [treatment, setTreatment] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      await onRegister(
        patientAddress,
        timestamp.toISOString(),
        doctorAddress,
        complaints,
        treatment
      );
      setPatientAddress('');
      setTimestamp(new Date());
      setDoctorAddress('');
      setComplaints('');
      setTreatment('');
      setIsOpen(false);
      setErrorMessage('');
    } catch (error) {
      setIsLoading(false);
      console.error('Error registering visit:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsOpen(true)}
        >
          Register Visit
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg animate-fadeIn">
            <input
              type="text"
              value={patientAddress}
              onChange={(e) => setPatientAddress(e.target.value)}
              placeholder="Enter patient's address"
              className="border p-2 w-full mb-2"
            />
            <DatePicker
              selected={timestamp}
              onChange={(date) => setTimestamp(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              value={doctorAddress}
              onChange={(e) => setDoctorAddress(e.target.value)}
              placeholder="Enter doctor's address"
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              value={complaints}
              onChange={(e) => setComplaints(e.target.value)}
              placeholder="Enter complaints"
              className="border p-2 w-full mb-2"
            />
            <input
              type="text"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              placeholder="Enter treatment"
              className="border p-2 w-full mb-4"
            />
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => {
                  setIsOpen(false);
                  setIsLoading(false);
                }}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
            {isLoading && (
              <div className="flex items-center justify-center mb-4">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterVisit;