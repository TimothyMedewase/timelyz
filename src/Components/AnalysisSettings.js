import React, { useState } from 'react';

const AnalysisSettings = ({ onAlgorithmSelect }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('');

  const handleAlgorithmChange = (event) => {
    setSelectedAlgorithm(event.target.value);
  };

  const handleApplySettings = () => {
    if (selectedAlgorithm) {
      // Pass the selected algorithm to the parent component for further processing.
      onAlgorithmSelect(selectedAlgorithm);
    }
  };

  return (
    <div>
      <label>Select AI Algorithm:</label>
      <select onChange={handleAlgorithmChange}>
        <option value="">Choose an Algorithm</option>
        <option value="LSTM">Long Short-Term Memory (LSTM)</option>
        <option value="ARIMA">ARIMA (AutoRegressive Integrated Moving Average)</option>
        <option value="Prophet">Prophet</option>
        <option value="GBM">Gradient Boosting Machines (GBM)</option>
        <option value="NeuralProphet">NeuralProphet</option>
      </select>
      <button onClick={handleApplySettings}>Apply Settings</button>
    </div>
  );
};

export default AnalysisSettings;
