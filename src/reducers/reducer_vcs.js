import { FETCH_VCS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_VCS:
      return [action.payload.data, ...state];
  }
  return state
}
