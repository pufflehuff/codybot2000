/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AllModal({ type, submissions, loggedInUser, problemsAuthored, currentStreak, onLogoutClick }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (type === 'Statistics') {
    return (
      <div>
        <MenuItem onClick={handleOpen}>
          <Typography textAlign="center">Statistics</Typography>
        </MenuItem>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Statistics
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {loggedInUser}
              {' '}
              Statistics
            </Typography>
            <div className="streak-box">
              <span>Current Streak:</span>
              <span>{currentStreak}</span>
            </div>
            <p>Authored Problems:</p>
            <ul className="authored-problems-list">
              {problemsAuthored.map((problem) => <li key={problem} className="authored-problem">{problem}</li>)}
            </ul>
            <p>Submitted Problems:</p>
            <ul className="submitted-problems-list">
              {submissions.map((problem) => <li key={`${problem}-submission`} className="submitted-problem">{problem}</li>)}
            </ul>
          </Box>
        </Modal>
      </div>
    );
  }
  if (type === 'Logout') {
    return (
      <div>
        <Box onClick={() => onLogoutClick()}>
          <MenuItem onClick={handleOpen}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Logout Screen
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Thanks for Visiting Codybot2000!
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
}

AllModal.propTypes = {
  type: PropTypes.string.isRequired,
  submissions: PropTypes.array.isRequired,
  currentStreak: PropTypes.number.isRequired,
  problemsAuthored: PropTypes.array.isRequired,
  loggedInUser: PropTypes.string.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};
