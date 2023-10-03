import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Me from '../images/me.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(20),
        height: theme.spacing(20),
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
