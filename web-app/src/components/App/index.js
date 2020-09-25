import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../Header';
import ForecastParams from '../ForecastParams';
import ForecastDisplay from '../ForecastDisplay';
import Footer from '../Footer';
import './index.css';

function App() {
  return (
    <Box className="app">
      <Header></Header>
      <ForecastParams></ForecastParams>
      <ForecastDisplay></ForecastDisplay>
      <Footer></Footer>
    </Box>
  );
}

export default App;
