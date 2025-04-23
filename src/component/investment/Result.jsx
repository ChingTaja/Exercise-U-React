import { calculateInvestmentResults } from '../../../util/investment';

export default function Result({ input }) {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);

  return <p>REsult</p>;
}
