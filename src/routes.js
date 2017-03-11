import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './page_components/app'
import SearchBar from './containers/search_bar'
import StartupList from './containers/startup_list'
import VCs from './page_components/vc';
import EditVC from './components/edit_vc';
import Portfolio from './page_components/portfolio'
import NewPortfolio from './components/new_portfolio'
import ConnectPortfolio from './page_components/connect_portfolio'
import Startups from './page_components/startups'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={VCs} />
    <Route path='/vc' component={VCs} />
    <Route path='/vc/edit/:id' component={EditVC} />
    <Route path='/portfolio/:id' component={Portfolio} />
    <Route path='/startup/new' component={NewPortfolio} />
    <Route path='/portfolio/add/:id' component={ConnectPortfolio} />
    <Route path='/startups' component={Startups} />
  </Route>
);
