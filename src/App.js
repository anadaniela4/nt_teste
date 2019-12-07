import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

const Header = loadable(() => import('./components/Header/Header'));
const MovieList = loadable(() => import('./components/MovieList/MovieList'));
const MovieDetail = loadable(() => import('./components/MovieDetail/MovieDetail'));

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={MovieList} />
        <Route path='/movie/:id' component={MovieDetail} />
      </Switch>
    </div>
  );
}

export default App;
