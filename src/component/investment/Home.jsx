import '../../css/investment.css';
import Header from './Header';
import UserInput from './UserInput';
import Result from './Result';

const [userInput, setUserInput] = useState({
  initialInvestment: 1000,
  annualInvestment: 500,
  expectedReturn: 10,
  duration: 2,
});

const handleChange = (inputIdentifier, newValue) => {
  setUserInput((preInput) => {
    return {
      ...preInput,
      [inputIdentifier]: newValue,
    };
  });
};

export default function Investment() {
  return (
    <>
      <Header />
      <UserInput input={userInput} onChange={handleChange} />
      <Result input={userInput} />
    </>
  );
}
