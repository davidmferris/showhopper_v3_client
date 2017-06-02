import axios from 'axios';
import moment from 'moment';
import lodash from 'lodash';

export const SEARCH_CITIES = 'SEARCH_CITIES';
export const GET_SHOWS = 'GET_SHOWS';
export const POSITION_MAP = 'POSITION_MAP';
export const CLEAR_SHOWS = 'CLEAR_SHOWS';
export const DISPLAY_SHOWS_LIST = 'DISPLAY_SHOWS_LIST';

export function searchCities(city) {
  const url = `https://showhopper-api.herokuapp.com/api/v1/locations?query=${city}&per_page=3`;
  const request = axios.get(url);

  return {
    type: SEARCH_CITIES,
    payload: request
  };
}

export function getShows(metroId, date) {
  date = date || moment().format('YYYY-MM-DD');

  const url = `https://showhopper-api.herokuapp.com/api/v1/shows?metro_area_id=${metroId}&min_date=${date}&max_date=${date}`;
  const request = axios.get(url);

  return {
    type: GET_SHOWS,
    payload: request
  };
}

export function positionMap(cityData) {
  return {
    type: POSITION_MAP,
    payload: cityData.metroArea
  }
}

export function clearShows(shows) {
  _.forEach(shows, function(show) {
    if(show.marker) {
      show.marker.setMap(null);
    }
  });

  return {
    type: CLEAR_SHOWS,
    payload: []
  }
}

export function displayShowsList(value) {
  return {
    type: DISPLAY_SHOWS_LIST,
    payload: value
  }
}
