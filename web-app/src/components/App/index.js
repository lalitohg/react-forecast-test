import React from 'react';
import { Box } from '@material-ui/core';
// import logo from './logo.svg';
import Header from '../Header';
import ForecastParams from '../ForecastParams';
import ForecastDisplay from '../ForecastDisplay';
import Footer from '../Footer';
import './App.css';

function App() {
  return (
    <Box>
      <Header></Header>
      <ForecastParams></ForecastParams>
      <ForecastDisplay></ForecastDisplay>
      <Footer></Footer>
    </Box>
  );
}

export default App;
