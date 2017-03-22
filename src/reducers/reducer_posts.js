import { FETCH_POSTS, FETCH_POST } from '../actions/index'

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      // ...state = keep current state but update 'all' variable in state
      return { ...state, all: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}
