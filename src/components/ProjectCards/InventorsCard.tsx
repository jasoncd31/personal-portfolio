import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tip from '../../images/tip.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 4000,
    maxHeight: 825,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function handleClick(url: string): void {
  window.open(url, '_blank');
}

export default function FragmentCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h3'>
          The Inventors Project
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Graduate Capstone 2024
        </Typography>
        <img src={Tip} alt="Cool Stuff" width="100%" />
        <Typography variant="body2" component="p">
            The Inventors Project is a 3D Platformer set in a space out of time. The game is build in Godot 4.2 and is currently in development.
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => { handleClick("https://www.github.com/jasoncd31/") }} color='primary' size="small" >Github Repository</Button>
      </CardActions>
    </Card>
  );
}