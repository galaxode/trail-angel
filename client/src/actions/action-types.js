const actionTypes = {
  TEST_INCREMENT: 'TEST_INCREMENT',
  TEST_DECREMENT: 'TEST_DECREMENT',
  
  CREATE_USER: 'CREATE_USER',
  UPDATE_USER: 'UPDATE_USER',
  DELETE_USER: 'DELETE_USER',
  RECEIVE_USER_DATA: 'RECEIVE_USER_DATA',

  REQUEST_TRAILS: 'REQUEST_TRAILS',
  FETCH_TRAILS: 'FETCH_TRAILS',
  RECEIVE_TRAILS: 'RECEIVE_TRAILS',
  UPDATE_TRAIL: 'UPDATE_TRAIL',

  SUBMIT_SEARCH: 'SUBMIT_SEARCH',
  RECEIVE_SEARCH_RESULTS: 'RECEIVE_SEARCH_RESULTS',

  REQUEST_FAVORITES: 'REQUEST_FAVORITES',
  FETCH_FAVORITES: 'FETCH_FAVORITES',
  RECEIVE_FAVORITES: 'RECEIVE_FAVORITES',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',

  INITIALIZE_APP: 'INITIALIZE_APP',
  GET_GEOLOCATION: 'GET_GEOLOCATION',
  RECEIVE_GEOLOCATION: 'RECEIVE_GEOLOCATION'
}

export default actionTypes;