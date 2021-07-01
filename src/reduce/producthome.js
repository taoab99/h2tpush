import * as types from '../const/actiontypes';

var initiallstate = [];

var myReduce = ( state = initiallstate, action)=>{
    switch (action.type){
        case types.LIST_ALL:
            state = action.product;
            return [...state];

        default: return state;
    }
};

export default myReduce