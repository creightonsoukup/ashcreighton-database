import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app'
import CompanySearch from './containers/company_search'
import SearchBar from './containers/search_bar'
import StartupList from './containers/startup_list'
import CompanyList from './containers/company_list'
import VCIndex from './components/index';
import EditVC from './components/edit_vc';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={VCIndex} />
    <Route path='/vc/new' component={CompanyList} />
    <Route path='/vc/:id' component={EditVC} />
  </Route>
);
