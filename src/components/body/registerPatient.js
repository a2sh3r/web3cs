import React, { useState } from 'react';

const RegisterPatient = ({ onRegister }) => {
  const [patientAddress, setPatientAddress] = useState('');
  const [patientName, setPatientName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      await onRegister(patientAddress, patientName);
      setPatientAddress('');
      setPatientName('');
      setIsOpen(false);
      setErrorMessage('');
    } catch (error) {
      console.error('Error registering patient:', error);
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
          Register Patient
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
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter patient's name"
              className="border p-2 w-full mb-4"
            />
            {errorMessage && (
              <p className="text-red-500 mb-4">{errorMessage}</p>
            )}
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => setIsOpen(false)}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPatient;
