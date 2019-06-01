import { combineReducers } from 'redux';

import burgerReducer from './reducers/burger';
import orderReducer from './reducers/order';
import purchaseReducer from './reducers/purchase';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    burger: burgerReducer,
    order: orderReducer,
    purchase: purchaseReducer,
    auth: authReducer,
});

export default rootReducer;