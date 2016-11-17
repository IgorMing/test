  import {
  DELETE_TRADE,
  GET_TRADES,
  INSERT_TRADE,
  REQUEST_ERROR,
  UPDATE_TRADE,
} from '../constants/types';
import { getConnection } from '../utils/connector';

export const getTrades = () => {
  return (dispatch) => {
    const httpClient = getConnection();

    httpClient.get('/trades.json')
    .then((response) => {
      const { data } = response;

      dispatch({
        data,
        type: GET_TRADES,
      });
    })
    .catch((error) => {
      dispatch({
        error,
        type: REQUEST_ERROR,
      });
    });
  };
};

export const updateTrade = (id, obj) => {
  return (dispatch) => {
    const httpClient = getConnection();

    httpClient.put(
      `/trades/:${id}.json`,
      obj
    )
    .then((response) => {
      dispatch({ type: UPDATE_TRADE });
    })
    .catch((error) => {
      dispatch({
        error,
        type: REQUEST_ERROR,
      });
    });
  };
};

export const deleteTrade = (id) => {
  return (dispatch) => {
    const httpClient = getConnection();

    httpClient.delete(`/trades/:${id}.json`)
    .then((response) => {
      dispatch({ type: DELETE_TRADE });
    })
    .catch((error) => {
      dispatch({
        error,
        type: REQUEST_ERROR,
      });
    });
  };
};

export const insertTrade = (obj) => {
  return (dispatch) => {
    const httpClient = getConnection();

    httpClient.post(
      '/trades.json',
      obj
    )
    .then((response) => {
      dispatch({ type: INSERT_TRADE });
    })
    .catch((error) => {
      dispatch({
        error,
        type: REQUEST_ERROR,
      });
    });
  };
};
