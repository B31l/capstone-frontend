import * as React from 'react';
import '../../main.css';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export default function ProfileLeft() {
  return (
    <Card sx={{ width: 360, maxHeight: 400, marginRight: '16px' }}>
      <CardMedia
        sx={{ height: 240 }}
        image="https://i.pinimg.com/originals/a2/0c/98/a20c98fa8f1c655dd98c468ee68dc3f7.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          user.name
        </Typography>

        <Typography variant="body2" color="text.secondary">
          user.info 주저리주저리
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">0 followers</Button>
        <Button size="small">0 following</Button>
      </CardActions>
    </Card>
  );
}
