import React, { useState } from 'react';

const RegisterDoctor = ({ onRegister }) => {
  const [doctorAddress, setDoctorAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Состояние для хранения сообщения об ошибке
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      await onRegister(doctorAddress);
      setDoctorAddress('');
      setIsOpen(false);
      setErrorMessage(''); // Очищаем сообщение об ошибке при успешной регистрации
      setIsLoading(false);
    } catch (error) {
      console.error('Error registering doctor:', error);
      setIsLoading(false);
      if (error.message.includes('Doctor already registered')) {
        setErrorMessage('Doctor already registered');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsOpen(true)}
        >
          Register Doctor
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg animate-fadeIn">
            <input
              type="text"
              value={doctorAddress}
              onChange={(e) => setDoctorAddress(e.target.value)}
              placeholder="Enter doctor's address"
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

export default RegisterDoctor;
