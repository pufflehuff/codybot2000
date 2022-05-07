import React from 'react';
import styled from 'styled-components';
import AddNewPrompt from './AddNewPrompt';

document.body.style.backgroundColor = '#36494E;';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #597081;
  font-family: Arial;
  height: 100px;
  color: #a9cef4;
  border-bottom: 1px solid #a9cef4;
`;

export default function TempApp() {
  return (
    <>
      <Header>
        <h2>Add a new prompt here!</h2>
      </Header>
      <AddNewPrompt />
    </>
  );
}
