import React from 'react';
import Home from '../section/home';
import Sanphammuadong from '../section/sanphammuadong';
import Cart from '../section/cart';
import Sale from '../section/sale';
import Diachistore from '../section/diachistore';
import Huongdan from '../section/huongdan';
const Route = [
    {
        path : "/",
        exact : true,
        main :() => <Home />
    },
    {
        path: "/spmuadong",
        exact: false,
        main: ()=> <Sanphammuadong />
    },
    {
        path: "/sale",
        exact: false,
        main : ()=> <Sale />
    },
    {
        path: "/diachistore",
        exact: false,
        main: ()=> <Diachistore />
    },
    {
        path: "/huongdan",
        exact: false,
        main : ()=> <Huongdan />
    },
    {
        path: "/cart",
        exact: false,
        main: ()=> <Cart />
    }
];
export default Route;