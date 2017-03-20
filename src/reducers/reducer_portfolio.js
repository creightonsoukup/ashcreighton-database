import { FETCH_PORTFOLIO, DELETE_INVESTMENTS } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PORTFOLIO:
      return [ action.payload.data, ...state ]
    case DELETE_INVESTMENTS:
      return [action.payload.data, ...state]
    default:
      return state;
  }
}
