import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MenuIcon extends Component {
    render() {
        const { cart, showaccount } = this.props;
        return (
            <div className="menu-icon">
                <div className="menu-icon-hiden">
                    <a href="#"><i className="fas fa-search"></i></a>
                    <div className="box-serch">
                        <h3>TÌM KIẾM</h3>
                        <form>
                            <input type="text" placeholder="tìm kiếm sản phẩm....."></input>
                        </form>
                    </div>
                </div>
                <div>
                    <a href="#" onClick={showaccount}><i className="fas fa-user-circle"></i></a>
                </div>
                <div>
                    <Link to="/cart"><i className="fas fa-shopping-bag posi"><span>{cart.length}</span></i></Link>
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
export default connect(mapStatetoprops, null)(MenuIcon);