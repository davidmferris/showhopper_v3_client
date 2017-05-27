import { combineReducers } from 'redux';
import SearchCitiesReducer from './search_cities_reducer';
import GetShowsReducer from './get_shows_reducer';
import PositionMapReducer from './position_map_reducer';

const rootReducer = combineReducers({
  cities: SearchCitiesReducer,
  shows: GetShowsReducer,
  map: PositionMapReducer
});

export default rootReducer;
