import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import trades from './trades';

export default combineReducers({
  form: formReducer,
  trades,
});
