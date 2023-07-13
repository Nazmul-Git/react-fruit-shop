import React from 'react';
import './OrderList.css'

const OrderList = (props) => {
    const {cart}=props;
    console.log(cart);
    return (
        <div className='order-summary'>
            <h1>Order Summary</h1>
        </div>
    );
};

export default OrderList;