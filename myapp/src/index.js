import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { CollectionContextProvider } from './context/CollectionContext'; 
import { ContextProvider } from './context/WorkoutContext';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CollectionContextProvider>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </CollectionContextProvider>
);

