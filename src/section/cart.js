import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../homeproduct.css';
import '../cart.css';
import * as action from '../action/index'
class Cart extends Component {
    constructor(props) {
        super(props);
    }
    tinhtien = (item) => {
        return item.price * item.soluong;
    }
    tinhtongtien = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            var i;
            for (i = 0; i < cart.length; i++) {
                total += cart[i].price * cart[i].soluong;
            }
        }
        return total;
    }
    render() {
        const { cart, tanggiamsoluong, deletesanpham } = this.props;
        var showcart = cart.map((item, index) => {
            return (
                <tr className="tr_cart" key={index}>
                    <td className="cart_image">
                        <img src={item.url} />
                    </td>
                    <td className="cart_items">
                        <h2> {item.name} </h2>
                        <p> {item.price}đ</p>
                        <button onClick={() => tanggiamsoluong(item, -1)} >-</button> <span>{item.soluong}</span> <button onClick={() => tanggiamsoluong(item, 1)}>+</button>
                    </td>
                    <td className="cart_price td_align"> {this.tinhtien(item)}đ </td>
                    <td className="cart_delete td_remote" ><button onClick={() => deletesanpham(item)}><i className="far fa-trash-alt"></i></button></td>
                </tr>
            )
        })
        return (
            <div className="home">
                <div className="home_title">
                    <h2>GIỎ HÀNG CỦA BẠN</h2>
                    <p> có {cart.length} sản phẩm trong giỏ hàng </p>
                </div>
                <div className="home_products">
                    <div className="home_box_cart">
                        <div className="cart">
                            <table>
                                <tbody>
                                    {
                                        showcart
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="total_price_cart">
                            <div className="h2titlecart">
                                <h2>Thông tin đơn hàng</h2>
                            </div>
                            <div className="infocart">
                                <p>Tổng tiền <span> {this.tinhtongtien(cart)} đ</span></p>
                            </div>
                            <div className="paycart">
                                <button>THANH TOÁN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
const mapStatetoprops = (state) => {
    return {
        cart: state.cart
    }
}
const mapDispatchtoprops = (dispatch, props) => {
    return {
        deletesanpham: (cart) => {
            dispatch(action.xoasanpham(cart))
        },
        tanggiamsoluong: (item, number) => {
            dispatch(action.tanggiamsoluong(item, number))
        }
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(Cart);
