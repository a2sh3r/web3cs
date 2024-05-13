import React, { useState } from 'react';

const PatientHistoryComponent = ({ contract, account }) => {
  const [patientAddress, setPatientAddress] = useState('');
  const [patientHistory, setPatientHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getPatientHistory = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const history = await contract.methods
        .getPatientHistory(patientAddress)
        .call({ from: account });
      // Assuming history is an array of tuples, where each tuple contains a date string and other data
      // We'll map over the history and format the date as it is
      const formattedHistory = history.map((visit) => {
        const date = visit[0]; // Assuming the date is the first element in the tuple
        return { ...visit, date };
      });
      setPatientHistory(formattedHistory);
    } catch (error) {
      setPatientHistory([]); // Clear the patient history on error
      setErrorMessage('Error fetching patient history');
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div className="text-center">
        <input
          type="text"
          value={patientAddress}
          onChange={(e) => setPatientAddress(e.target.value)}
          placeholder="Enter patient's address"
          className="border p-2 w-full mb-2"
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={getPatientHistory}
        >
          Get Patient History
        </button>
        {isLoading && <p>Loading...</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {patientHistory.length > 0 && (
          <div>
            <h2>Patient History:</h2>
            {patientHistory.map((visit, index) => (
              <div key={index}>
                <p>Date: {visit.date}</p>
                <p>Doctor Address: {visit.doctorAddress}</p>
                <p>Complaints: {visit.complaints}</p>
                <p>Treatment: {visit.treatment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientHistoryComponent;
