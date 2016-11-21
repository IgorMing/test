import _ from 'lodash';
  import {
  DELETE_TRADE,
  GET_TRADES,
  GET_TRADE_BY_ID,
  INSERT_TRADE,
  REQUEST_ERROR,
  UPDATE_TRADE,
} from '../constants/types';
import { getConnection } from '../utils/connector';

export const getTradeById = (id) => {
  return (dispatch) => {
    const httpClient = getConnection();

    httpClient.get('/trades.json')
    .then((response) => {
      const { data } = response;
      const objById = _.filter(data, (eachData) => {
        return eachData.id === Number(id);
      });

      dispatch({
        data: objById[0],
        type: GET_TRADE_BY_ID,
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
    console.log('update');
    const httpClient = getConnection();

    httpClient.put(
      `/trades/${id}.json`,
      obj
    )
    .then((response) => {
      const { data } = response;

      dispatch({
        data,
        type: UPDATE_TRADE,
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

export const deleteTrade = (id) => {
  return (dispatch) => {
    const httpClient = getConnection();

    httpClient.delete(`/trades/${id}.json`)
    .then(() => {
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
    console.log('insert');
    const httpClient = getConnection();

    httpClient.post('/trades', obj)
    .then((response) => {
      const { data } = response;

      dispatch({
        data,
        type: INSERT_TRADE,
      });
    });
  };
};
