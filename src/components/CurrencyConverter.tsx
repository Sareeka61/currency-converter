import React, { useState } from 'react';
import { exchangeRates } from './ExchangeRates';
import '../cssfiles/currencyconverter.css'

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');
  const [targetCurrency, setTargetCurrency] = useState<string>('EUR');
  const [result, setResult] = useState<number | null>(null);

  const convertCurrency = () => {
    const baseRate = exchangeRates[baseCurrency];
    const targetRate = exchangeRates[targetCurrency];
    const convertedAmount = (amount / baseRate) * targetRate;
    setResult(convertedAmount);
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="converter">
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        to
        <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button onClick={convertCurrency}>Convert</button>
      </div>
      {result !== null && (
        <div>
          <h2>
            {amount} {baseCurrency} = {result.toFixed(2)} {targetCurrency}
          </h2>
        </div>
      )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
