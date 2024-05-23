import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FlashcardsContextProvider } from './context/FlashcardsContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FlashcardsContextProvider>
        <App />
      </FlashcardsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);