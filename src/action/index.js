import * as types from '../const/actiontypes';

export const callapitoproduc = (product)=>{

    return {
        type :types.LIST_ALL,
        product: product
    }
}
export const toggleform = () =>{
    return {
        type: types.TOGGLEFORM
    }
}
export const addtocart = (item, number) => {
    return {
        type: types.ADDTOCART,
        item: item,
        number
    }
}
export const tanggiamsoluong = (item, number) => {
    return {
        type: types.TANGGIAMSOLUONG,
        item,
        number
    }
}
export const xoasanpham = (item) => {
    return {
        type:types.XOASANPHAM,
        item
    }
}