import { FILTER_STARTUPS } from '../actions/index';

const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FILTER_STARTUPS:
      return [ action.payload.data, ...state ]
    default:
      return state;
  }
}
