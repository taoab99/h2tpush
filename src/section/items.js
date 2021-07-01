import React, { Component } from 'react';
import * as action from '../action/index';
import { connect } from 'react-redux';
class Items extends Component {
    render() {
        const { item, addtocart} = this.props;
        return (
            <div className="home_item">
                <div className="home_item_conten">
                    <div className="home_item_image">
                        <img src={item.url} alt={item.name} />
                        <i className="fas fa-cart-plus" onClick={ () => addtocart(item, 1)}></i>
                    </div>
                    <div className="home_item_caption">
                        <a href="#">{item.name}</a>
                        <p> {item.price} <i style={{ textDecoration: "underline" }}>đ</i></p>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoprops = (state) => {
    return state;

}

const mapDispatchtoprops = (dispatch, props) => {
    return {
        addtocart: (product, number) => {
            dispatch(action.addtocart(product, number))
        }
    }
}

export default connect(mapStatetoprops, mapDispatchtoprops)(Items);