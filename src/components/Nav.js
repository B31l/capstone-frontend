import * as React from 'react';
import '../main.css';
import { Link } from 'react-router-dom';

import { Button, ButtonGroup } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import HandymanIcon from '@mui/icons-material/Handyman';

export default function Nav() {
  return (
    <nav>
      <ButtonGroup variant="contained">
        <Link to="/notes" className="nav-link">
          <Button variant="text" startIcon={<DescriptionIcon />} size="large">
            노트
          </Button>
        </Link>
        <Link to="/groups" className="nav-link">
          <Button variant="text" startIcon={<WorkspacesIcon />} size="large">
            그룹
          </Button>
        </Link>
        <Link to="/tools" className="nav-link">
          <Button variant="text" startIcon={<HandymanIcon />} size="large">
            도구
          </Button>
        </Link>
      </ButtonGroup>
    </nav>
  );
}
