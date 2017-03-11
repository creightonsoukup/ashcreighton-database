import { GET_ALL_STARTUPS } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_ALL_STARTUPS:
      return [ action.payload.data, ...state ]
    default:
      return state;
  }
}
