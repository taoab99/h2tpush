import React, { Component } from 'react';
import MenuHeadent from './menu-headen';
import MenuLogo from './menu-logo';
import MenuList from './menu-list';
import MenuIcon from './menu-icon';
class Menu extends Component {
    render() {
        const { showaccount } = this.props;
        return (
            <div className="menu">
                <MenuHeadent />
                <MenuLogo />
                <MenuList />
                <MenuIcon showaccount={showaccount} />
            </div>

        );
    }

}

export default Menu;
