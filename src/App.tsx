import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import SkillCard from './components/SkillCards/skillCard';
import ProfileCard from './components/profileCard';
import FragmentCard from './components/ProjectCards/FragmentCard';
import DBCard from './components/ProjectCards/DBCard';
import EngineCard from './components/SkillCards/engineCard';
import FFCard from './components/ProjectCards/FFCard';
import RamenhoodCard from './components/ProjectCards/RamenhoodCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard />
      </header>
      <body className='App-projects'>
        <h1>Projects</h1>
        <Grid container spacing = {3} direction='column' justifyContent='space-between' alignContent='center'>
          <Grid item xs = {6}>
            <FragmentCard />
          </Grid>
          <Grid item xs = {6}>
            <DBCard />
          </Grid>
          <Grid item xs = {6}>
            <FFCard />
          </Grid>
          <Grid item xs = {6}>
            <RamenhoodCard />
          </Grid>
        </Grid>
      </body>
      <body className='App-skills'>
        <h1>Skills</h1>
        <Grid container spacing = {2} direction='column' justifyContent='space-between' alignContent='center'>
          <Grid item xs = {6}>
            <SkillCard />
          </Grid>
          <Grid item xs = {6}>
            <EngineCard />
          </Grid>
        </Grid>
      </body>
      <footer className="App-footer">
        <h1>Website made in React and Material UI V4</h1>
      </footer>
    </div>
  );
}

export default App;
