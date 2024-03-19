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
                    Welcome to my webpage! My name is Jason Douglas. I am a passionate game designer/developer.
                </Typography>
                <br />
                <Typography variant="body1">
                    Below you can find all sorts of projects and events I've worked on as well as skills and software I've learned from them.
                    Feel free to reach out to me if you have any questions or want to collaborate on a project!
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Grid container spacing={3} direction= 'column' justifyContent='center' alignItems='center'>
                    <Grid item xs>
                        <MeImage />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}