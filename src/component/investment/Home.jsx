import '../../css/investment.css';
import { useState } from 'react';
import Header from './Header';
import UserInput from './UserInput';
import Result from './Result';

export default function Investment() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 10,
    duration: 2,
  });

  const isInputValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((preInput) => {
      return {
        ...preInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput input={userInput} onChange={handleChange} />
      {isInputValid && <Result input={userInput} />}
      {!isInputValid && <p className="center">the duration must greater than zero</p>}
    </>
  );
}
