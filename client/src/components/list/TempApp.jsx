import React from 'react';
import List from './List.jsx';
import styled from 'styled-components';

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
};
