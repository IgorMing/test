  import {
  DELETE_TRADE,
  GET_TRADES,
  INSERT_TRADE,
  REQUEST_ERROR,
  UPDATE_TRADE,
} from '../constants/types';
import { getConnection } from '../utils/connector';
import $ from 'jquery';
// import _ from 'lodash';

export const getTrades = () => {
  return (dispatch) => {
    $.ajax({
      dataType: 'json',
      type: ''
      url: 'https://magnetis-trades.herokuapp.com/trades.json',
      success: (response) => {
        const { data } = response;

        console.log(data);
        dispatch({
          data,
          type: GET_TRADES,
        });
      }
    });
  };
    // .catch((error) => {
    //   dispatch({
    //     error,
    //     type: REQUEST_ERROR,
    //   });
    // });
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

const insertTrade = (obj) => {
  $.ajax({
    data: obj,
    dataType: 'json',
    type: 'POST',
    url: 'https://magnetis-trades.herokuapp.com/trades.json',
    success: () => {
      alert('Saved successfully!');
    }
  });
};

export const submit = (values) => {
  const { trades } = values;

  if(trades.length === 1) {
    const obj = { trade: trades[0] };

    insertTrade(obj);
  }
};
