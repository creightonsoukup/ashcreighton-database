import { FETCH_COMPANIES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COMPANIES:
      return [action.payload.data, ...state];
  }
  return state
}
