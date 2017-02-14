import { combineReducers } from 'redux';
import StartupReducer from './reducer_startups'
import VCsReducer from './reducer_vcs';
import VCReducer from './reducer_vc';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  startup: StartupReducer,
  vcs: VCsReducer,
  vc: VCReducer,
  updateVC: formReducer
});

export default rootReducer;
