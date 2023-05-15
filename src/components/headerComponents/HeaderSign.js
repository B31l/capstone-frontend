import * as React from 'react';
import '../../main.css';
import { Box, Button, Modal, Typography } from '@mui/material';
import SocialButton from '../signComponents/SocialButton';

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

export default function HeaderSign() {
  const [open, setOpen] = React.useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" size="large" sx={{ height: '2.5rem' }} onClick={modalOpen}>
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <SocialButton social="google" />
          <SocialButton social="kakao" />
          <SocialButton social="naver" />
        </Box>
      </Modal>
    </div>
  );
}
