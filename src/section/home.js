import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../action/index';
import Call from '../CallAPI/Call';
import Items from './items';
import Imagetitle from './imagetitle';

import '../homeproduct.css';

class Home extends Component {
    // gọi API từ server và lưu vào store;

    componentDidMount() {
        Call('products', 'GET', null).then(
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
                    src="https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/h2tshop%2Faosomititle.jpg?alt=media&token=b5b931ac-5a75-47bf-9ec4-43c6336528b7"
                />
                <div className="home_title">
                    <h2> NEW ARRIVAL</h2>
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

export default connect(mapStatetoprops, mapDispatchtoprops)(Home);
