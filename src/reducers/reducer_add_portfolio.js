import { ADD_PORTFOLIO } from '../actions/index';

const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_PORTFOLIO:
      return [ action.payload.data, ...state ]
    default:
      return state;
  }
}
