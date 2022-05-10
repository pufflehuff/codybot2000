import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import ResponsiveAppBar from './Navbar';

document.body.style.backgroundColor = '#36494E;';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #597081;
  height: 100px;
  color: #A9CEF4;
  border-bottom: 1px solid #A9CEF4;
`;

export default function App() {
  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <Header>
        <h2>Toy Problem List</h2>
      </Header>
      {/* add current user as prop to responsive app bar */}
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
}
