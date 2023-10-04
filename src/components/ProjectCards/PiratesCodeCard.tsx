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
          PiratesCode
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Languages and Automata II Final
        </Typography>
        <img src="https://placehold.co/600x400" alt="Cool Stuff" width="100%"/>
        <Typography variant="body2" component="p">
          PiratesCode was creating as a final project for my Languages and Automata II class. It is a pirate-themed programming language that compiles to JavaScript. It uses OHM to parse the code and generate the AST. It then uses the AST to generate JavaScript code. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => { handleClick("https://www.github.com/jasoncd31/PiratesCode") }} color='primary' size="small" >Github Repository</Button>
      </CardActions>
    </Card>
  );
}