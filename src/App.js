import React from 'react';

import Header from './Components/Header';
import MyRadioButton from './Components/RadioButton';
import ChartViewer from './Components/ChartViewer';
import Footer from './Components/Footer';  

import './App.css';

function App() {
  return (
    <div >
      <Header />
      <MyRadioButton />
      <div style={{textAlign:'center'}}>
      <ChartViewer />
      </div>
     
      <Footer />
    </div>
  );
}

export default App;