import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Loader from './components/Loader';

export default () => {
  const LaunchListPage = Loadable({loader: () => import('./pages/launches'), loading:Loader});
  
  return (
    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={LaunchListPage} />
      </Switch>

    </BrowserRouter>
  );
};
