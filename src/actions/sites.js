import types from '../constants/actionTypes';

export const setSiteId = siteId => {
  return { type: types.SET_SITE_ID, payload: siteId };
};

export const setSelectedSites = sites => {
  return { type: types.SET_SELECTED_SITES, payload: sites };
};

export const fetchSites = () => dispatch => {
  return dispatch({
    [types.CALL_API]: {
      types: [types.SITES_REQUEST, types.SITES_SUCCESS, types.SITES_FAILURE],
      endpoint: '/sites'
    }
  });
};
