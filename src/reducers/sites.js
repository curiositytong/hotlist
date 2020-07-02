import types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  slug: null,
  data: [],
  selectedSites: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_SITE_SLUG:
      return {
        ...state,
        slug: action.payload
      };
    case types.SET_SELECTED_SITES:
      return {
        ...state,
        selectedSites: action.payload
      };
    case types.SITES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.SITES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case types.SITES_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};
