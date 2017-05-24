import { GET_SHOWS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case GET_SHOWS:
    return action.payload.data.resultsPage.results.event;
  }

  return state;
}
