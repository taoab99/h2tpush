import { combineReducers }  from 'redux';
import producthome from './producthome';
import toggleform from './toggleform';
import cart from './addcart';

const myReducers = combineReducers({
    producthome,
    toggleform,
    cart
});
export default myReducers;