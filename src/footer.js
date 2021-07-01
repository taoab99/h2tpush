import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-conten">
                    <div className="footer-box">
                        <h2>CÔNG TY CỔ PHẦN MAY MẶC THỜI TRANG H2T VIỆT NAM</h2>
                        <p>
                            Địa chỉ: Số 1, ngõ 40, tổ 14 phố Nguyễn Thị Định, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội
                            Người đại diện: NGÔ TRÍ TÙNG
                            Mã số thuế: 0106533311, ngày cấp ĐKKD 08/05/2014. Nơi cấp: Sở kế hoạch và đầu tư Hà Nội.
                        </p>
                    </div>
                    <div className="footer-box">
                        <div className="footer-align">
                            <h2>Chính sách</h2>
                            <ul>
                                <li>
                                    <a href="#">CS ĐỔI TRẢ</a>
                                </li>
                                <li>
                                    <a href="#">TK NGÂN HÀNG</a>
                                </li>
                                <li>
                                    <a href="#">KT ĐƠN HÀNG</a>
                                </li>
                                <li>
                                    <a href="#">MEMBERSHIP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-box">
                        <div className="footer-align">
                            <h2>Cửa hàng</h2>
                            <ul>
                                <li>
                                    <a href="#">HÀ NỘI</a>
                                </li>
                                <li>
                                    <a href="#">TPHCM</a>
                                </li>
                                <li>
                                    <a href="#">NINH BÌNH</a>
                                </li>
                                <li>
                                    <a href="#">HẢI PHÒNG</a>
                                </li>
                                <li>
                                    <a href="#">ĐÀ NẴNG</a>
                                </li>
                                <li>
                                    <a href="#">HẢI DƯƠNG</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-box">
                        <h2>Tư vấn khách hàng</h2>
                        <li>
                            <a href="#" style={{ color: 'red' }} >0969132896</a>
                        </li>
                        <p>Tất cả các ngày trong tuần</p>
                        <h2>Kết nối với chúng tôi</h2>
                        <ul className="mes">
                            <li>
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-youtube-square"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h2>Chăm sóc khách hàng</h2>
                        <li>
                            <a href="#" style={{ color: 'red' }}>0969132896</a>
                        </li>
                        <p>Tất cả các ngày trong tuần</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;