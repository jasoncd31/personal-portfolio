import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LMUHacksImg from '../../../images/LMUHacks1.jpg';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: '25vw'
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

export default function DBCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h2'>
          LMUHacks
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Programming Competition 2023
        </Typography>
        <img src="https://placehold.co/600x400" alt="Cool Stuff" width="100%"/>
        <Typography variant="body2" component="p">
          LMUHacks is a 24-hour programming competition hosted by Loyola Marymount University. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => { handleClick("https://www.github.com/jasoncd31/") }} color='primary' size="small" >Github Repository</Button>
      </CardActions>
    </Card>
  );
}