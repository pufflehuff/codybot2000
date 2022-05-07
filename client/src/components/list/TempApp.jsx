import React from 'react';
import styled from 'styled-components';
import List from './List';

document.body.style.backgroundColor = '#36494E;';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #597081;
  font-family: Arial;
  height: 100px;
  color: #A9CEF4;
  border-bottom: 1px solid #A9CEF4;
`;

export default function TempApp() {
  return (
    <>
      <Header>
        <h2>Toy Problem List</h2>
      </Header>
      <List />
    </>
  );
}
