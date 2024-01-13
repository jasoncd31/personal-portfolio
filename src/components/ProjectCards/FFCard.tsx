import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FF_front from '../../images/FF_front.jpg';

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

export default function FFCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h2'>
          Freeway Farmers
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Adv. Interactive Animation Final 2022
        </Typography>
        <img src={FF_front} alt="Cool Stuff" width="100%" />
        <Typography variant="body2" component="p">
            Freeway Farmers is a 3D infinite runner built in Unreal Engine 5. It bears no resemblence to any other alliterative infinite scrolling games.
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => { handleClick("https://www.github.com/jasoncd31/Fragment-Game") }} color='primary' size="small" >Github Repository</Button>
      </CardActions>
    </Card>
  );
}