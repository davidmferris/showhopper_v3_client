import { POSITION_MAP } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case POSITION_MAP:
    return action.payload;
  }

  return state;
}
