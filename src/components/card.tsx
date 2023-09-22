import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h2'>
          Jason Douglas
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Game Developer and Designer
        </Typography>
        <Typography variant="body2" component="p">
            Likes Sandwichs
            {bull}
            Likes Games
            {bull}
            Likes Dogs
            {bull}
            Likes Cats
        </Typography>
      </CardContent>
      <CardActions >
        <Button onClick={() => { handleClick("https://www.github.com/jasoncd31") }} color='primary' size="small" >Github</Button>
        <Button onClick={() => { handleClick("https://www.linkedin.com/in/jasoncd31") }} size="small">LinkedIn</Button>
        <Button onClick={() => { handleClick("https://www.github.com/jasoncd31") }} size="small">Contact Me</Button>
      </CardActions>
    </Card>
  );
}