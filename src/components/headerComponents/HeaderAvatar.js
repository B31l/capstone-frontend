import * as React from 'react';
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export default function HeaderAvatar({ username = false }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isAnchorEl = Boolean(anchorEl);
  const menuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack className="header-drawer-profile" direction="row">
      <Tooltip title="내 계정">
        <IconButton
          onClick={menuOpen}
          size="small"
          sx={{ width: '100%', justifyContent: 'start', borderRadius: 0 }}
          aria-controls={isAnchorEl ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isAnchorEl ? 'true' : undefined}>
          <Avatar className="header-drawer-profile-avatar" />
          {username && <Typography className="header-drawer-profile-username">Username</Typography>}
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
              left: 20,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
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
    </Stack>
  );
}
