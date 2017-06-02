import { DISPLAY_SHOWS_LIST } from '../actions/index';

export default function(state = false, action) {
  switch(action.type) {
  case DISPLAY_SHOWS_LIST:
    return action.payload
  }

  return state;
}
