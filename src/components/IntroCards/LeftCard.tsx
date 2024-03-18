import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {

    maxWidth: 1000,
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

function emailClick(): void {
  window.open("mailto:jasoncd31@gmail.com", '_blank');
}

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h4'>
          Contact Me
        </Typography>
        {/* <Typography variant="h5" color="textSecondary">
          L
        </Typography> */}
        <br />
        <Grid container spacing={3} direction = 'column'>
          <Grid item xs>
              <Button onClick={() => { handleClick("https://www.github.com/jasoncd31") }} color='primary' size="small" >Github</Button>
          </Grid>
          <Grid item xs>
              <Button onClick={() => { handleClick("https://www.linkedin.com/in/jasoncd31") }} color='primary' size="small">LinkedIn</Button>
          </Grid>
          <Grid item xs>
              <Button onClick={() => { emailClick() }} color='primary' size="small">Email Me</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}