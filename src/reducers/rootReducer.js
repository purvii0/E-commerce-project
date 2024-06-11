import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
// import checkoutReducer from './checkoutReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  // checkout: checkoutReducer
});

export default rootReducer;
