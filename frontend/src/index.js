import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FlashcardsContextProvider } from './context/FlashcardsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlashcardsContextProvider>
      <App />
    </FlashcardsContextProvider>
  </React.StrictMode>
);
