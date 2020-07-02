import types from '../constants/actionTypes';

export const fetchItems = (siteId) => (dispatch) => {
  return dispatch({
    [types.CALL_API]: {
      types: [types.ITEMS_REQUEST, types.ITEMS_SUCCESS, types.ITEMS_FAILURE],
      endpoint: `/sites/${siteId}/items/`,
    },
  });
};
