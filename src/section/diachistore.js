import React, { Component } from 'react';
import '../homeproduct.css';

class Diachistore extends Component {
    render() {
        return (
            <div className="home">
                <div className="home_products">
                    <div className="home_title">
                        <h2>HỆ THỐNG CỬA HÀNG CỦA CÔNG TY H2T</h2>
                    </div>
                    <div style={{width: 100 + '%'}, {padding: 10 + 'px'}}>
                        <div className="where_store">

                            <div>
                                <h3>CỬA HÀNG TẠI HÀ NỘI</h3>
                                <ul>
                                    <li>
                                        <h5>XUÂN THỦY</h5>
                                        <p>100 xuân thủy, cầu giấy hà nội</p>
                                    </li>
                                    <li>
                                        <h5>MỸ ĐÌNH</h5>
                                        <p> 201 nguyễn hoàng mỹ đình hà nội</p>
                                    </li>
                                    <li>
                                        <h5>ĐỐNG ĐA</h5>
                                        <p>45 tây sơn, đống đa hà nội</p>
                                    </li>
                                    <li>
                                        <h5>NHỔN</h5>
                                        <p>39 cầu diễn, hà nội</p>
                                    </li>
                                    <li>
                                        <h5>BẮC TỪ LIÊM</h5>
                                        <p> 222 cổ nhuế, bắc từ liêm, hà nội</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="where_store">
                            <div>
                                <h3>CỬA HÀNG TẠI TPHCM</h3>
                                <ul>
                                    <li>
                                        <h5>QUẬN 1</h5>
                                        <p>55 đường 3/2 quận 1 tphcm</p>
                                    </li>
                                    <li>
                                        <h5>QUẬN THỦ ĐỨC</h5>
                                        <p> đường tam bình quận thủ đức tphcm</p>
                                    </li>
                                    <li>
                                        <h5>QUẬN T12</h5>
                                        <p> 22 lê thị riêng quận 12 tphcm</p>
                                    </li>
                                    <li>
                                        <h5>QUẬN TÂN PHÚ</h5>
                                        <p> 115 đường tân quý quận tân phú tphcm</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="where_store">   
                            <div>
                                <h3>CỬA HÀNG TẠI NINH BÌNH</h3>
                                <ul>
                                    <li>
                                        <h5>TP NINH BÌNH</h5>
                                        <p>10 phường đông thành, tp ninh bình</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Diachistore;
