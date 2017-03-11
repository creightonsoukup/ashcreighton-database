import { combineReducers } from 'redux';
import StartupReducer from './reducer_startups'
import VCsReducer from './reducer_vcs';
import VCReducer from './reducer_vc';
import PortfolioReducer from './reducer_portfolio'
import { reducer as formReducer } from 'redux-form';
import AddPortfolioReducer from './reducer_add_portfolio'
import GetAllStartupsReducer from './reducer_all_startups'
import FilterStartupReducer from './reducer_filter_startup'

const rootReducer = combineReducers({
  startup: StartupReducer,
  vcs: VCsReducer,
  vc: VCReducer,
  updateVC: formReducer,
  portfolio: PortfolioReducer,
  addPortfolio: AddPortfolioReducer,
  allStartups: GetAllStartupsReducer,
  filterStartup: FilterStartupReducer
});

export default rootReducer;
