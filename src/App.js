import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import contractABI from './contract/abi.json'; // Путь к файлу ABI вашего контракта
import RegisterDoctor from './components/body/registerDoctor';
import RegisterPatient from './components/body/registerPatient';
import RegisterVisit from './components/body/registerVisit';
import PatientHistoryComponent from './components/body/patientHistory';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [contract, setContract] = useState(null);

  const registerDoctor = async (doctorAddress) => {
    if (contract && web3) {
      try {
        const gasPrice = await web3.eth.getGasPrice();
        const result = await contract.methods.addDoctor(doctorAddress).send({
          from: account,
          gasPrice: gasPrice,
        });
        console.log('Result:', result);
      } catch (error) {
        console.error('Error adding doctor', error);
      }
    }
  };

  const registerPacient = async (pacientAddress, pacientName) => {
    if (contract && web3) {
      try {
        const gasPrice = await web3.eth.getGasPrice();
        const result = await contract.methods
          .registerPatient(pacientAddress, pacientName)
          .send({
            from: account,
            gasPrice: gasPrice,
          });
        console.log('Result:', result);
      } catch (error) {
        console.error('Error adding doctor', error);
      }
    }
  };

  const registerVisit = async (
    pacientAddress,
    timestamp,
    doctorAddress,
    complaints,
    treatment
  ) => {
    if (contract && web3) {
      try {
        const gasPrice = await web3.eth.getGasPrice();
        const result = await contract.methods
          .recordVisit(
            pacientAddress,
            timestamp,
            doctorAddress,
            complaints,
            treatment
          )
          .send({
            from: account,
            gasPrice: gasPrice,
          });
        console.log('Result:', result);
      } catch (error) {
        console.error('Error adding visit', error);
      }
    }
  };

  useEffect(() => {
    async function load() {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
          setWeb3(web3Instance);

          // Подключение к контракту
          const contractAddress = '0x9bEf4927Cb431caAB82F90A14B63106ecfDE8872'; // Замените на ваш адрес контракта
          const instance = new web3Instance.eth.Contract(
            contractABI,
            contractAddress
          );
          setContract(instance);
        } catch (error) {
          console.error('Error connecting to MetaMask', error);
        }
      } else {
        console.error('Please install MetaMask!');
      }
    }

    load();
  }, []);

  return (
    <div>
      <Header />
      <div>Your account is: {account}</div>
      <div className="flex flex-col items-center justify-center h-screen space-y-10">
        <RegisterDoctor onRegister={registerDoctor} />
        <RegisterPatient onRegister={registerPacient} />
        <RegisterVisit onRegister={registerVisit} />
        <PatientHistoryComponent contract={contract} account={account} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
