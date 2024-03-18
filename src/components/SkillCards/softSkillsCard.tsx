import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    backgroundColor: 'whitesmoke',
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


export default function SkillCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h4'>
          Coding Languages
        </Typography>
        <br />
        <Grid container spacing={3} justifyContent='center'>
          <List>
            <Typography variant="body2" component="p">
              C++
            </Typography>
            <Typography variant="body2" component="p">
              C#
            </Typography>
            <Typography variant="body2" component="p">
              Java
            </Typography>
            <Typography variant="body2" component="p">
              Python
            </Typography>
            <Typography variant="body2" component="p">
              HTML & CSS
            </Typography>
            <Typography variant="body2" component="p">
              JavaScript/TypeScript
            </Typography>
          </List>
        </Grid>
      </CardContent>
    </Card>
  );
}