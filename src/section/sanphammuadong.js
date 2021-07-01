import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../action/index';
import Call from '../CallAPI/Call';
import Items from './items';
import Imagetitle from './imagetitle';

import '../homeproduct.css';
class Sanphammuadong extends Component {
    componentDidMount() {
        Call('quanjean', 'GET', null).then(
            res => {
                this.props.LoadApi(res.data)
            }
        )
    }
    render() {
        const { producthome } = this.props;
        var result = "";
        if (producthome.length > 0) {
            result = producthome.map((item, index) => {
                return (

                    <Items
                        key={index}
                        item={item}
                    />
                );
            });
        }


        return (
            <div className="home">
                <Imagetitle
                    src="https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/h2tshopQuanjean%2Fquanjean.jpg?alt=media&token=eb49dd04-47db-445c-aa9b-da01db676ab9"
                />
                <div className="home_title">
                    <h2> SẢN PHẨM MÙA ĐÔNG</h2>
                </div>
                <div className="home_products">
                    <div className="home_box">

                        {
                            result
                        }

                    </div>
                </div>

            </div>
        )
    }
}
const mapStatetoprops = (state) => {
    return {
        producthome: state.producthome
    }
}

const mapDispatchtoprops = (dispatch, props) => {
    return {
        LoadApi: (products) => {
            dispatch(action.callapitoproduc(products))
        }
    }
}

export default connect(mapStatetoprops, mapDispatchtoprops)(Sanphammuadong);

