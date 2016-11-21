import { GET_TRADES, GET_TRADE_BY_ID } from '../constants/types';

const defaultState = {
  tradeList: {},
  tradeById: {}
};

/**
* @param {Object} state - Default aplication state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default function reducer (state = defaultState, action) {
    switch (action.type) {
      case GET_TRADES: {
        return {
          ...state,
          tradeList: action.data,
        };
      }
      case GET_TRADE_BY_ID: {
        return {
          ...state,
          tradeById: action.data,
        };
      }
      default: {
        return state;
      }
    }
}
