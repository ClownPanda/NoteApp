import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NoteProvider } from './Context/NoteContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <NoteProvider>
      <App />
    </NoteProvider>
  
);

