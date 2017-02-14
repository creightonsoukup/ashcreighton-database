import { FETCH_VC } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_VC:
      return [ action.payload.data, ...state ]
    default:
      return state;
  }
}
