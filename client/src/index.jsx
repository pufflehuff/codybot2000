import React from 'react';
import { createRoot } from 'react-dom/client';
import TempApp from './components/list/TempApp';
import './Styles.css';

createRoot(document.getElementById('root')).render(
  <TempApp />,
);
