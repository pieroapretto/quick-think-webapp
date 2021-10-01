import { Route, Switch } from 'react-router';
import GamePage from '../pages/GamePage';
import HomePage from '../pages/HomePage';
import LearnPage from '../pages/LearnPage';
import React from 'react';

function App() {
  
  return (
    <Switch>
      <Route path={'/'} exact>
        <HomePage />
      </Route>
      <Route path={'/game'}>
        <GamePage />
      </Route>
      <Route path={'/learn-how-to-play'}>
        <LearnPage />
      </Route>
    </Switch>
  );
}

export default App;
