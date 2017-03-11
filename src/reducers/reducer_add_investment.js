import { ADD_INVESTMENT } from '../actions/index';

const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_INVESTMENT:
      return [ action.payload.data, ...state ]
    default:
      return state;
  }
}
