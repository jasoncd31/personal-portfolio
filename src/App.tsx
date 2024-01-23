import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import SkillCard from './components/SkillCards/skillCard';
import ProfileCard from './components/profileCard';
import FragmentCard from './components/ProjectCards/FragmentCard';
import DBCard from './components/ProjectCards/DBCard';
import EngineCard from './components/SkillCards/engineCard';
import FFCard from './components/ProjectCards/FFCard';
import RamenhoodCard from './components/ProjectCards/RamenhoodCard';
import PiratesCodeCard from './components/ProjectCards/PiratesCodeCard';
import Button from '@material-ui/core/Button';
import EscapeKeckCard from './components/ProjectCards/AdvisementCards/EscapeKeckCard';

function handleClick(url: string): void {
  window.open(url, '_blank');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard />
      </header>
      <body className='App-projects'>
        <h1>Gaming Projects</h1>
        <div className='padding'>
          <Grid container spacing = {3} direction='row' justifyContent='space-between' alignContent='center'>
            <Grid item xs>
              <FragmentCard />
            </Grid>
            <Grid item xs>
              <DBCard />
            </Grid>
            <Grid item xs>
              <FFCard />
            </Grid>
            {/* <Grid item xs>
              <RamenhoodCard />
            </Grid> */}
          </Grid>
        </div>
      </body>
      <body className='App-skills'>
        <h1>Skills</h1>
        <Grid container spacing = {3} direction='column' justifyContent='space-between' alignContent='center'>
          <Grid item xs>
            <SkillCard />
          </Grid>
          <Grid item xs>
            <EngineCard />
          </Grid>
        </Grid>
      </body>
      <body className='App-projects'>
        <h1>Gaming Advisement Projects</h1>
        <div className='padding'>
          <Grid container spacing = {3} direction='row' justifyContent='space-between' alignContent='center'>
            <Grid item xs>
              <EscapeKeckCard />
            </Grid>
          </Grid>
        </div>
      </body>
      <body className='App-projects'>
        <h1>Non-Gaming Projects</h1>
        <Grid container spacing = {3} direction='column' justifyContent='space-between' alignContent='center'>
          <Grid item xs>
            <PiratesCodeCard />
          </Grid>
        </Grid>
      </body>
      <footer className="App-footer">
        <h5>
          Website made in React and Material UI V4 
          <br />Check out the repo!<br />
          <Button onClick={() => { handleClick("https://github.com/jasoncd31/personal-portfolio") }} color='primary' size="small" >Portfolio Repo</Button>
        </h5>
      </footer>
    </div>
  );
}

export default App;
