import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { Home } from './pages/Home';

export function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
