import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import List from './components/list/List';
import AttemptPrompt from './components/attemptPrompt/AttemptPrompt';
import AddNewPrompt from './components/addPrompt/AddNewPrompt';
import './Styles.css';
import './components/list/ListStyles.css';
import './components/addPrompt/AddPrompt.css';
import './components/attemptPrompt/Attempt.css';

reactDom.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route path="" element={<List />} />
        <Route path="solve" element={<AttemptPrompt />} />
        <Route path="add" element={<AddNewPrompt />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
