/* eslint-disable */
import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// eslint-disable-next-line no-unused-vars
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// eslint-disable-next-line no-unused-vars
import Logo from 'Assets/Darwin.png';
import AllModal from './AllModal';
import Context from './Context';

function ResponsiveAppBar() {
  // eslint-disable-next-line no-unused-vars
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loggedInUser, setLoggedInUser] = React.useState('Anonymous');
  const [currentUserId, setCurrentUserId] = React.useState('');
  const [currentStreak, setCurrentStreak] = React.useState(0);
  const [problemsAuthored, setProblemsAuthored] = React.useState([]);
  const [submissions, setSubmissions] = React.useState([]);
  const [filtered] = React.useContext(Context);

  let greeting;
  if (loggedInUser === 'Anonymous') {
    greeting = 'Welcome to Codybot2000!';
  } else {
    greeting = `Welcome ${loggedInUser}`;
  }


  // const pages = ['Create a Problem'];
  const settings = ['Login', 'Statistics', 'Logout'];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));

    return JSON.parse(jsonPayload);
  };

  window.handleCredentialResponse = (response) => {
    const {
      sub, email, given_name, family_name
    } = parseJwt(response.credential);
    fetch(`http://localhost:3000/api/userStats/${JSON.stringify(sub)}/${JSON.stringify(email)}/${JSON.stringify(given_name)}/${JSON.stringify(family_name)}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
      .then((result) => {
        return result.json()
      })
      .then((parsedData) => {
        console.log(parsedData)
        let fullName = JSON.parse(parsedData.firstName) + ' ' + JSON.parse(parsedData.lastName);
        setLoggedInUser(fullName);
        setCurrentStreak(parsedData.streak);
        setProblemsAuthored(parsedData.problems);
        setSubmissions(parsedData.submitted);
        setCurrentUserId(parsedData.username);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onLogoutClick = () => {
    window.google.accounts.id.disableAutoSelect();
    setLoggedInUser('Anonymous');
    setCurrentStreak(0);
    setProblemsAuthored([]);
    setSubmissions([]);
    console.log('You have been successfully logged out!');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#597081', color: '#A9CEF4' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className="navbar-icon" src={Logo} alt="Darwin Icon" />
          <div>{greeting}</div>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" state={{currentUserId: currentUserId}}>
              <Button
                key="list"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                LIST PROBLEMS
              </Button>
            </Link>
            <Link to="solve" state={{currentUserId: currentUserId, problem: filtered[Math.floor(Math.random() * filtered.length)]}}>
              <Button
                key="solve"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                SOLVE A PROBLEM
              </Button>
            </Link>
            <Link to={loggedInUser === 'Anonymous' ? '#' : 'add'} state={{currentUserId: currentUserId}}>
              <Button
                key="add"
                disabled={loggedInUser === 'Anonymous'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ADD A PROBLEM
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={loggedInUser}>{loggedInUser[0]}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => {
                if (setting === 'Login') {
                  return (
                    <div key={setting}>
                      <div
                        id="g_id_onload"
                        data-client_id="1041808193164-18g6c4g0uquku3e1a4mmfvtobdpshocv.apps.googleusercontent.com"
                        data-callback="handleCredentialResponse"
                        data-login_uri="http://localhost:3000"
                        data-auto_prompt="false"
                      />
                      <div
                        className="g_id_signin"
                        data-type="standard"
                        data-size="large"
                        data-theme="outline"
                        data-text="sign_in_with"
                        data-shape="rectangular"
                        data-logo_alignment="left"
                      />
                    </div>
                  );
                }
                return <AllModal onLogoutClick={onLogoutClick} loggedInUser={loggedInUser} currentStreak={currentStreak} problemsAuthored={problemsAuthored} submissions={submissions} key={setting} type={setting} />;
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
