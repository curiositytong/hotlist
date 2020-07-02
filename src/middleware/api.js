import { jsonHeaders } from '../constants/config';
import actionTypes from '../constants/actionTypes';

const API_ROOT = process.env.REACT_APP_API_ROOT;

const callApi = (endpoint, request) => {
  if (request && request.body) {
    request.body = JSON.stringify(request.body);
  }

  const requestWithHeaders = {
    headers: {
      ...jsonHeaders,
    },
    ...request,
  };

  return fetch(API_ROOT + endpoint, requestWithHeaders).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export default () => (next) => (action) => {
  const callAPI = action[actionTypes.CALL_API];
  if (typeof callAPI == 'undefined') {
    return next(action);
  }

  const { endpoint, types, request } = callAPI;

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every((type) => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[actionTypes.CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint, request).then(
    (response) =>
      next(
        actionWith({
          payload: response,
          type: successType,
        })
      ),
    (error) =>
      next(
        actionWith({
          type: failureType,
          errMsg: error.message || 'Something bad happened',
        })
      )
  );
};
