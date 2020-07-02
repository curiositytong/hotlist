import types from '../constants/actionTypes';

export const setSiteSlug = (slug) => {
  return { type: types.SET_SITE_SLUG, payload: slug };
};

export const setSelectedSites = (sites) => {
  return { type: types.SET_SELECTED_SITES, payload: sites };
};

export const fetchSites = () => (dispatch) => {
  return dispatch({
    [types.CALL_API]: {
      types: [types.SITES_REQUEST, types.SITES_SUCCESS, types.SITES_FAILURE],
      endpoint: '/sites/',
    },
  });
};
