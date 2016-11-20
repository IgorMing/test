  import {
  DELETE_TRADE,
  GET_TRADES,
  GET_TRADE_BY_ID,
  INSERT_TRADE,
  REQUEST_ERROR,
  UPDATE_TRADE,
} from '../constants/types';
import { getConnection } from '../utils/connector';
import _ from 'lodash';

export const getTradeById = (id) => {
  return (dispatch) => {
    const instance = getConnection();

    instance.get('/trades.json')
    .then((response) => {
      const { data } = response;
      const objById = _.filter(data, (d) => { return d.id === Number(id) });

      dispatch({
        data: objById[0],
        type: GET_TRADE_BY_ID
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
    const instance = getConnection();

    instance.get('/trades.json')
    .then((response) => {
      const { data } = response;

      dispatch({
        data,
        type: GET_TRADES
      })
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
    const instance = getConnection();

    instance.put(
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
    const instance = getConnection();

    instance.delete(`/trades/${id}.json`)
    .then((response) => {
      console.log('súcesso?');
      dispatch({ type: DELETE_TRADE });
    })
    .catch((error) => {
      console.log('erro?', error);
      dispatch({
        error,
        type: REQUEST_ERROR,
      });
    });
  };
};

const insertTrade = (obj) => {
  return (dispatch) => {
    dispatch({ type: INSERT_TRADE });
  }
};
