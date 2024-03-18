import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Me from '../images/me.jpg';
var sides = 30;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(sides),
        height: theme.spacing(sides),
      },
    },
  }),
);

export default function MeImage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Avatar alt="Jason Douglas" src={Me} />
    </div>
  );
}
