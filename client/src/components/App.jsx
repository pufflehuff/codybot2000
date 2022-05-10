import React from 'react';
import List from './list/List';
import ResponsiveAppBar from './list/Navbar';
import AddNewPrompt from './addPrompt/AddNewPrompt';
import AttemptPrompt from './attemptPrompt/AttemptPrompt';

document.body.style.backgroundColor = '#36494E;';

export default function App() {
  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <>

      {/* add current user as prop to responsive app bar */}
      <ResponsiveAppBar />
      <List />
      <AddNewPrompt />
      <AttemptPrompt />
    </>
  );
}
