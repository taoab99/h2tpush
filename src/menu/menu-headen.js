import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../action/index';

class MenuHeadent extends Component {
    render() {
        const { iscomplate } = this.props;
        return (
            <div className="menu-hiden">
                <div className="menu-hiden-span">

                    <span onClick={ this.props.togglefrom }>
                        <i className="fas fa-align-justify"></i>
                    </span>
                    {
                        iscomplate === true &&


                        <ul className="list-group list-group-absolute">
                            <li className="list-group-item ">
                                <Link to="/" onClick={ this.props.togglefrom }>SẢN PHẨM</Link>
                            </li>
                            <li className="list-group-item ">
                                <Link to="/spmuadong" onClick={ this.props.togglefrom }>SP MÙA ĐÔNG</Link>
                            </li>
                            <li className="list-group-item ">
                                <Link to="/sale" onClick={ this.props.togglefrom }>SALE UP TO 50%</Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        );
    }

}
const mapStatetoprops =(state) => {
    return {
        iscomplate: state.toggleform
    }
}
const mapDispatchtoprops =(dispatch, props) => {
    return {
        togglefrom: ()=>{
            dispatch(action.toggleform());
        }
    }
}
export default connect(mapStatetoprops, mapDispatchtoprops)(MenuHeadent);
