import userReducer from './users_reducer'
import { combineReducers } from 'redux'

const entitiesReducer = combineReducers({
  users: userReducer
});

export default entitiesReducer;