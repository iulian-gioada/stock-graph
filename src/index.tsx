import React from 'react';
import ReactDOM from 'react-dom';
import { Grommet } from 'grommet';
import './index.css';
import App from './App';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      size: '16px',
      height: '20px',
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);