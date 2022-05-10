import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './Navbar';

document.body.style.backgroundColor = '#36494E;';

export default function App() {
  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      {/* add current user as prop to responsive app bar */}
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
}
