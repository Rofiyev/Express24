import {combineReducers} from 'redux';
import ItemsReducer from './AddItems';
import UsersReducer from './UsersChange';

const rootReducer = combineReducers({
  users: UsersReducer,
  items: ItemsReducer,
})

export default rootReducer;