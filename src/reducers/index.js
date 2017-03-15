import { combineReducers } from 'redux';
import StartupReducer from './reducer_startups'
import VCsReducer from './reducer_vcs';
import VCReducer from './reducer_vc';
import PortfolioReducer from './reducer_portfolio'
import { reducer as formReducer } from 'redux-form';
import AddPortfolioReducer from './reducer_add_portfolio'
import GetAllStartupsReducer from './reducer_all_startups'
import FilterStartupReducer from './reducer_filter_startup'
import InvestmentReducer from './reducer_add_investment'

const rootReducer = combineReducers({
  companies: StartupReducer,
  vcs: VCsReducer,
  vc: VCReducer,
  updateVC: formReducer,
  portfolio: PortfolioReducer,
  addPortfolio: AddPortfolioReducer,
  allStartups: GetAllStartupsReducer,
  filterStartup: FilterStartupReducer,
  addInvestment: InvestmentReducer
});

export default rootReducer;
