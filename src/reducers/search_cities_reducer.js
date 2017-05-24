import { SEARCH_CITIES } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case SEARCH_CITIES:
    return action.payload.data.resultsPage.results.location;
  }

  return state;
}
