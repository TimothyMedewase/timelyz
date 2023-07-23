import React from 'react';
import './App.css';

import Header from './Components/Header';
import MyRadioButton from './Components/RadioButton';
import ChartViewer from './Components/ChartViewer';
import Footer from './Components/Footer';  

import AnalysisSettings from './Components/AnalysisSettings';
import Dashboard from './Components/Dashboard';
import DataImport from './Components/DataImport';
import DataVisualization from './Components/Visualization';



function App() {
  return (
    <div >
      {/* <Header />
      <MyRadioButton />
      <div style={{textAlign:'center'}}>
      <ChartViewer />
      </div>
     
      <Footer /> */}
      
      <Header />
      <DataImport />
      <AnalysisSettings />
      <Dashboard />
      <ChartViewer />
      <Footer />
    </div>
  );
}

export default App;