import React, { Component }  from 'react';
import '../homeproduct.css';
class Huongdan extends Component {
    render() {
        return (
            <div className="home">
            <div className="home_products">
                <div className="home_title">
                    <h2>HƯỚNG DẪN MUA HÀNG VÀ ĐỔI TRẢ HÀNG</h2>
                </div>
                    <div className="tutorial">
                        <h5>LÀM THẾ NÀO ĐỂ MUA HÀNG TẠI H2T STORE</h5>
                        <ul>
                            <li>chọn sản phẩm cần mua</li>
                            <li>click vào biểu tượng giỏ hàng - sản phẩm sẽ được tự động thêm vào giỏ</li>
                            <li>vào giỏ hàng kiểm tra sản phẩm và thực hiện bước thanh toán</li>
                        </ul>
                    </div>
                    <div className="tutorial">   
                        <h5>CHÍNH SÁCH ĐỔI TRẢ HÀNG</h5>
                        <ul>
                            <li>Hàng đổi trong vòng 3 ngày kể từ khi nhận hàng ( tính theo dấu bưu điên ) </li>
                            <li>Còn trong tình trạng ban đầu, còn tem, nhãn mác</li>
                            <li>Chưa qua giặt, ủi hoặc bị bẩn, hư hỏng</li>
                            <li>Đổi sản phẩm trong bao bì có dán mã sản phẩm bên ngoài.</li>
                            <li>Đổi sản phẩm cùng Hóa đơn </li>
                            <li>Đổi sản phẩm do hư hỏng từ phía cửa hàng</li>
                        </ul>
                    </div>
                    <div className="tutorial">    
                        <h5>Những trường hợp KHÔNG đổi sản phẩm:</h5>
                        <ul>
                            <li>Các sản phẩm thuộc chương trình giảm giá, khuyến mại, quà tặng.</li>
                            <li>Các sản phẩm của khách hàng là Cộng Tác Viên, Các đơn mua sỉ.</li>
                            <li>Sản phẩm mua về đã qua giặt là sử dụng hoặc không còn nguyên tem nhãn.</li>
                            <li>Sản phẩm hư hỏng do lỗi của khách hàng.</li>
                        </ul>

                    </div>
            </div>
        </div>
        );
    }

}

export default Huongdan;
