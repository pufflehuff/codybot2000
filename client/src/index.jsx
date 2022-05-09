import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './Styles.css';
import './components/list/ListStyles.css';
import './components/addPrompt/AddPrompt.css';

createRoot(document.getElementById('root')).render(
  <App />,
);
