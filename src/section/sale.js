import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../action/index';
import Call from '../CallAPI/Call';
import Items from './items';
import Imagetitle from './imagetitle';

import '../homeproduct.css';

class Sale extends Component {
    // gọi API từ server và lưu vào store;

    componentDidMount() {
        Call('giaydep', 'GET', null).then(
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
                    src="https://firebasestorage.googleapis.com/v0/b/blog-8f054.appspot.com/o/h2tGiayDep%2Fgiatitle.jpg?alt=media&token=f2edb929-032c-468a-8295-706496bef0e9"
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
        },
        addtocart: (product) => {
            dispatch(action.addtocart(product))
        }
    }
}

export default connect(mapStatetoprops, mapDispatchtoprops)(Sale);
