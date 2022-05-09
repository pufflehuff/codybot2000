import React from 'react';
import reactDom from 'react-dom';
import App from './components/App';
import './Styles.css';
import './components/list/ListStyles.css';
import './components/addPrompt/AddPrompt.css';

reactDom.render(
  <App />,
  document.getElementById('root'),
);
