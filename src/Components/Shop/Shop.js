import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import OrderList from '../OrderList/OrderList';

const Shop = () => {
    const [shop, setShop]=useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('fruits.json')
        .then(res=>res.json())
        .then(data=>setShop(data))
    },[])

    const addToCart=(product)=>{
        setCart(product);
    }
    return (
        <div>
            <div className='pera'>
              <p className='head'>Sun Fresh Fruits</p>
              <FontAwesomeIcon className='icon' icon={faBasketShopping}></FontAwesomeIcon>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam quasi cupiditate fuga voluptatibus nam deleniti necessitatibus pariatur est fugiat enim debitis rem, recusandae earum similique possimus iste voluptas perspiciatis! Porro rem, veritatis, qui est quis itaque mollitia assumenda recusandae animi eligendi obcaecati nesciunt placeat ducimus molestiae expedita, architecto temporibus dolorem suscipit facere dolores? Exercitationem consequuntur hic, quod quis, incidunt nulla perspiciatis corrupti quibusdam laborum placeat nemo pariatur libero! </p>
            </div>
            <div className='shop-container'>
            
            <div className="product-container">
                {
                   shop.map(products=><Product products={products} key={products.id} addToCart={addToCart} ></Product>)
                }
                
            </div>


            <div className="order-summary">
                <OrderList cart={cart}></OrderList>
            </div>
        </div>
        </div>
    );
};

export default Shop;