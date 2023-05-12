import * as React from 'react';
import { Link } from 'react-router-dom';
import '../main.css';
import logo from '../assets/images/logo.png';
import {
  Avatar,
  Button,
  ButtonGroup,
  Modal,
  Typography,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import SocialButton from '../components/signComponents/SocialButton';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import HandymanIcon from '@mui/icons-material/Handyman';

import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isAnchorEl = Boolean(anchorEl);
  const menuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuClose = () => {
    setAnchorEl(null);
  };
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  return (
    <header>
      <div className="header-in">
        <div className="header-title">
          <img src={logo} alt="logo" />
          <Link to="/" className="header-button home">
            PROJECT
          </Link>
        </div>
        <nav>
          <ButtonGroup variant="text">
            <Link to="/notes" className="nav-link">
              <Button variant="text" startIcon={<DescriptionIcon />}>
                Notes
              </Button>
            </Link>
            <Link to="/groups" className="nav-link">
              <Button variant="text" startIcon={<WorkspacesIcon />}>
                Groups
              </Button>
            </Link>
            {/* <Link to="/tools" className="nav-link">
              <Button variant="text" startIcon={<HandymanIcon />}>
                도구
              </Button>
            </Link> */}
          </ButtonGroup>
        </nav>
        <div className="header-item go-sign">
          <React.Fragment>
            <Tooltip title="내 계정">
              <IconButton
                onClick={menuOpen}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={isAnchorEl ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isAnchorEl ? 'true' : undefined}>
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={isAnchorEl}
              onClose={menuClose}
              onClick={menuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  width: 192,
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 32,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
              <MenuItem onClick={menuClose}>
                <Link to="/my" className="profile-menu-link">
                  <Avatar />
                  프로필
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={menuClose}>
                <Link to="/my" className="profile-menu-link">
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  설정
                </Link>
              </MenuItem>
              <MenuItem onClick={menuClose}>
                <Link to="/my" className="profile-menu-link">
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  로그아웃
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>

          <Button variant="contained" size="large" onClick={modalOpen}>
            로그인
          </Button>
          <Modal
            open={open}
            onClose={modalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                소셜 게정으로 로그인
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}></Typography>
              <SocialButton social="google" />
              <SocialButton social="kakao" />
              <SocialButton social="naver" />
            </Box>
          </Modal>
        </div>
      </div>
    </header>
  );
}
