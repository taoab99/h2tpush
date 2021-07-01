import * as types from '../const/actiontypes';


var findIndex = (cart, id) => {
    var i, index = -1;
    for (i = 0; i < cart.length; i++) {
        if (cart[i].id === id)
            index = i
    }
    return index;
}
const datacart = JSON.parse(localStorage.getItem('cart'));
var inittialstate = datacart ? datacart : [];
var myrduce = (state = inittialstate, action) => {
    switch (action.type) {
        case types.ADDTOCART:
            var data ={
                ...action.item,
                soluong: action.number
            }
            data.soluong = action.number;
            var index = findIndex(state, action.item.id);
            if(index !== -1){
                state[index] = {
                    ...state[index],
                    soluong: state[index].soluong + action.number
                };
            }else{
                 state.push(data);
                alert("sản phẩm đã đươc thêm vào giỏ hàng của bạn");
            }
            localStorage.setItem('cart',JSON.stringify(state));
            console.log(state);
            return [...state];
        case types.TANGGIAMSOLUONG:
            var index = findIndex(state, action.item.id);
            var data ={
                ...action.item,
                soluong: action.item.soluong + action.number
            }
            if(data.soluong > 0){
                state[index] = data;
            }
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
        case types.XOASANPHAM:
            var id = action.item.id;
            var data = state.filter((item)=> {
                return item.id !== id;
            });
            state = data;
            localStorage.setItem('cart',JSON.stringify(state));
            return [...state];
            
        default: return state;
    }
}
export default myrduce;