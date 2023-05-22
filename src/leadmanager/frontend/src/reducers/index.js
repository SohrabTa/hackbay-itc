import { combineReducers } from 'redux';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import update_data from "./update_data"

export default combineReducers({
  errors,
  messages,
  auth,
  update_data,
});
