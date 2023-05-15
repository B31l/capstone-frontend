import * as React from 'react';
import {
  Avatar,
  Box,
  Button,
  Drawer,
  Divider,
  IconButton,
  List,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import AddIcon from '@mui/icons-material/Add';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import HeaderDrawerListItem from './HeaderDrawerListItem';
import { Link } from 'react-router-dom';
import HeaderAvatar from './HeaderAvatar';

export default function HeaderDrawer() {
  const [open, setOpen] = React.useState(false);
  const drawerOpen = () => {
    setOpen(true);
  };
  const drawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isAnchorEl = Boolean(anchorEl);
  const menuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuClose = () => {
    setAnchorEl(null);
  };
  const list = (
    <Stack sx={{ height: '100vh', justifyContent: 'space-between' }}>
      <Stack>
        <HeaderAvatar username />
        <Divider />
        <Box
          sx={{ width: '15rem' }}
          role="presentation"
          onClick={drawerClose}
          onKeyDown={drawerClose}>
          <List sx={{ padding: '1rem' }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ width: '100%', margin: '0 0 0.5rem' }}>
              새 노트 만들기
            </Button>
            {/* <Divider /> */}
            <HeaderDrawerListItem text="홈" children={<HomeOutlinedIcon />} />
            <HeaderDrawerListItem text="노트" children={<AutoStoriesOutlinedIcon />} />
            <HeaderDrawerListItem text="그룹" children={<WorkspacesIcon />} />
            <HeaderDrawerListItem text="My H1" children={<CoPresentOutlinedIcon />} />
          </List>
        </Box>
      </Stack>
      <Stack>
        <p>ㅎㅇ</p>
      </Stack>
    </Stack>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={drawerOpen}>
          <IconButton aria-label="delete" onClick={drawerOpen} disabled color="primary">
            <TableRowsIcon />
          </IconButton>
        </Button>
        <Drawer open={open} onClose={drawerClose}>
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
