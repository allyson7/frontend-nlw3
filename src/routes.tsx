import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import OrphanagesMap from './styles/pages/OrphanagesMap';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
      <Route path="/app" component={OrphanagesMap} />
    </BrowserRouter>
  );
}

export default Routes;