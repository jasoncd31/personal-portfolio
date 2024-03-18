import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Tip from '../../images/tip.jpg';

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
          Current Project
        </Typography>
        <Typography variant="h5" color="textSecondary">
          The Inventors Project
        </Typography>
        <br />
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Typography variant="body1" align='left'>
                  <ul>
                    <li>Graduate Capstone 2024</li>
                    <li>3D Platformer</li>
                    <li>Godot 4.2</li>
                    <li>Currently in development</li>
                  </ul>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={Tip} alt="Cool Stuff" width="80%" />

            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}