import types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  data: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ITEMS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case types.ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};
