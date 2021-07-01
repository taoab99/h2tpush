import React, { Component } from 'react';
import '../homeproduct.css';

class Imagetitle extends Component {

    render() {
        return (
            <div className="imagetitle">
                <img src={this.props.src} alt="ảnh tiêu đề giới thiệu sản phẩm"></img>
            </div>
        )
    }
}

export default Imagetitle;

