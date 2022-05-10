import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import List from './components/list/List';
import Console from './components/console/Console';
import AddNewPrompt from './components/addPrompt/AddNewPrompt';
import './Styles.css';
import './components/list/ListStyles.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<List />} />
        <Route path="solve" element={<Console />} />
        <Route path="add" element={<AddNewPrompt />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
