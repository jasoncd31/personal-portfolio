import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Grid } from '@material-ui/core';
import { HotTub, GitHub, Email, LinkedIn, Description} from '@material-ui/icons';

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
          <Grid item>
            <Button onClick={() => { handleClick("https://www.github.com/jasoncd31") }} variant='contained' color='primary' size="medium" startIcon={<GitHub/>} >Github</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => { handleClick("https://www.linkedin.com/in/jasoncd31") }} variant='contained' color='primary' size="medium" startIcon={<LinkedIn/>} >LinkedIn</Button>
            </Grid>
          <Grid item>
            <Button onClick={() => { emailClick() }} variant='contained' color='primary' size="medium" startIcon={<Email/>} >Email Me</Button>
            </Grid>
          <Grid item>
            <Button onClick={() => { handleClick("https://steamcommunity.com/id/jasoncd31/") }} variant='contained' color='primary' size="medium" startIcon={<HotTub/>} >Steam</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => { handleClick("https://docs.google.com/document/d/1j0TXT8i-SzIN2EUE-x27ikgPwvHCfjIUZREJxSYS4iE/edit?usp=sharing") }} variant='contained' color='primary' size="medium" startIcon={<Description/>} >Resume</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}