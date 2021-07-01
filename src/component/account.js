import React, { Component } from 'react';
class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    onchanges = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState(
            {
                [name]: value
            }
        );
    }
    // thêm tài khoản vào localstorage
    ondone = () => {
        const account = this.state;
        if (account.name !== '' && account.password !== '') {
            localStorage.setItem('account', JSON.stringify(account));
            alert('tạo tài khoản thành công');
            this.setState(
                {
                    email: '',
                    password: ''
                }
            );
        } else {
            alert("bạn chưa nhập email và password");
        }

    }
    //xóa tài khoản khỏi localstorage
    ondelete = () => {
        const local = JSON.parse(localStorage.getItem('account'));
        if (local) {
            localStorage.removeItem('account');
            this.props.showaccount();
        }
        else {
            alert('bạn chưa đăng nhập');
        }
    }
    render() {
        const { email, password } = this.state;
        const account = JSON.parse(localStorage.getItem('account'));
        const checkAccount = account ? account.email : 'tài khoản của bạn';
        return (
            <div className="account">
                <div className="account_persion">
                    <p> {checkAccount} </p>
                </div>
                <div className="account_box">
                    <h2> Đăng Nhập Tài Khoản</h2>
                    <p>nhập email và mật khẩu của bạn</p>
                </div>
                <div className="account_box">
                    <input type="email" name="email" placeholder="email của bạn" value={email} onChange={this.onchanges}></input>
                    <input type="text" name="password" placeholder="nhập password" value={password} onChange={this.onchanges}></input>
                </div>
                <div className="account_box">
                    <button className="dangnhap" onClick={this.ondone}>Đăng nhập</button>
                    <button className="dangxuat" onClick={this.ondelete}>Đăng xuất</button>
                </div>
            </div>
        );
    }

}

export default Account;
