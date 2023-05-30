import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../main.css';
import logo from '../../assets/images/logo.png';
import { Button, ButtonGroup } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import HeaderDrawer from './HeaderDrawer';
import HeaderTools from './HeaderTools';
import HeaderSign from './HeaderSign';

export default function Header() {
  return (
    <header>
      <div className="header-in">
        <div className="header-left">
          <HeaderDrawer />
          <Link to="/" className="header-button home">
            <img src={logo} alt="logo" />
          </Link>

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
            <HeaderTools />
          </ButtonGroup>
        </div>
        <div className="header-right">
          <HeaderSign />
        </div>
      </div>
    </header>
  );
}
