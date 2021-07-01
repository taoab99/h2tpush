import React, { Component } from 'react';
import { Link } from "react-router-dom";
class MenuList extends Component {
    render() {
        return (
            <div className="menu-list">
                <ul>
                    <li>
                        <Link to="/">TRANG CHỦ</Link>
                    </li>
                    <li>
                        <Link to="/spmuadong">QUẦN JEAN - JOGER</Link>
                    </li>
                    <li>
                        <Link to="/sale">GIÀY DÉP</Link>
                    </li>
                    <li>
                        <Link to="/diachistore">ĐỊA CHỈ STORE</Link>
                    </li>
                    <li>
                        <Link to="/huongdan">CHÍNH SÁCH - HƯỚNG DẪN</Link>
                    </li>
                </ul>
            </div>
        );
    }

}

export default MenuList;
