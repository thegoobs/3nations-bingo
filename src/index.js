import './index.module.scss';
import { App } from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { GameProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider >
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
