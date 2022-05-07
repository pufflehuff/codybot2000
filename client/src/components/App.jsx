import React, {useState} from 'react';
import styled from 'styled-components';
import List from './list/List';
import ResponsiveAppBar from './list/Navbar';

document.body.style.backgroundColor = '#36494E;';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #597081;
  height: 100px;
  color: #A9CEF4;
  border-bottom: 1px solid #A9CEF4;
`;

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <Header>
        <h2>Toy Problem List</h2>
      </Header>
      <ResponsiveAppBar currentUser={currentUser}/>
      <List />
    </>
  );
}
