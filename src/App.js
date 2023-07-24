import React from 'react';
import './App.css';

import Header from './Components/Header';
import MyRadioButton from './Components/RadioButton';
import Charts from './Components/Charts';
import Footer from './Components/Footer';  

import AnalysisSettings from './Components/AnalysisSettings';

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
      <Charts />
      <Footer />
    </div>
  );
}

export default App;