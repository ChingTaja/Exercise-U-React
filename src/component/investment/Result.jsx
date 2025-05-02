import { calculateInvestmentResults, formatter } from '../../../util/investment';

export default function Result({ input }) {
  // 若 resultData 放在 function Result 導致每次重新 render Result 時又 push 舊的資料到 resultData 上
  let resultData = [];
  calculateInvestmentResults(input, resultData);

  if (resultData.length === 0) {
    return <p className="center">Invalid input data provided</p>;
  }
  const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
