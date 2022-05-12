import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './Navbar';
import Context from './Context';

export default function App() {
  // const [currentUser, setCurrentUser] = useState(null);

  const [filtered, setFiltered] = useState([]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={[filtered, setFiltered]}>
      {/* add current user as prop to responsive app bar */}
      <ResponsiveAppBar />
      <Outlet />
    </Context.Provider>
  );
}
