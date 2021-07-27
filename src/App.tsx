import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Soccer } from './pages/Soccer';
import { Shoes } from './pages/Shoes';
import { Music } from './pages/Music';

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories/soccer" exact component={Soccer} />
          <Route path="/categories/shoes" exact component={Shoes} />
          <Route path="/categories/music" exact component={Music} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
