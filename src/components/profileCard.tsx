import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import MeImage from './meImage';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
        <Typography variant='h2'>
          Jason Douglas
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Game Developer and Designer
        </Typography>
        <br />
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Typography variant="body1">
                    Hi! My name is Jason Douglas. I am a passionate game developer.
                </Typography>
                <br />
                <Typography variant="body1">
                    Based in Culver City, CA, I am currently a Graduate Student at Loyola Marymount University where I also received my Bachelor's Degree in Computer Science.
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Grid container spacing={3} direction= 'column' justifyContent='center' alignItems='center'>
                    <Grid item xs>
                        <MeImage />
                    </Grid>
                    <br />
                    <Grid item xs>
                        <Button onClick={() => { handleClick("https://www.github.com/jasoncd31") }} color='primary' size="small" >Github</Button>
                        <Button onClick={() => { handleClick("https://www.linkedin.com/in/jasoncd31") }} color='primary' size="small">LinkedIn</Button>
                        <Button onClick={() => { emailClick() }} color='primary' size="small">Contact Me</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}