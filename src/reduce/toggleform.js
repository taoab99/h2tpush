import * as types from '../const/actiontypes';

var inittialstate = false;

var myReduce = ( state = inittialstate, action) =>{
    switch(action.type) {
        case types.TOGGLEFORM:
            state = !state;
            return state;

        default: return state;
    }
}
export default myReduce;