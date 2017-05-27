import axios from 'axios';

export const SEARCH_CITIES = 'SEARCH_CITIES';
export const GET_SHOWS = 'GET_SHOWS';
export const POSITION_MAP = 'POSITION_MAP'

export function searchCities(city) {
  const url = `https://showhopper-api.herokuapp.com/api/v1/locations?query=${city}&per_page=3`;
  const request = axios.get(url);

  return {
    type: SEARCH_CITIES,
    payload: request
  };
}

export function getShows(metroId) {
  const url = `https://showhopper-api.herokuapp.com/api/v1/shows?metro_area_id=${metroId}&per_page=3`;
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
