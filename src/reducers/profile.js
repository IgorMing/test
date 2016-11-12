import { GET_TRADES } from '../constants/types';

const defaultState = {};

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
          ...action.data,
        };
      }
      default: {
        return state;
      }
    }
}
