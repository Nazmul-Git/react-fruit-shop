import React from 'react';
import './OrderList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMoneyCheckDollar, faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const OrderList = (props) => {
    const {cart, removeFromPage}=props;
    let quantity=0;
    let total=0;
    
    for(const product of cart){
        quantity+=product.quantity;
        total+=product.price*product.quantity;
    }
    const tax=parseFloat((total*(10/100)).toFixed(2));
    const finalTotal =total+tax;

    return (
        <div className='order-summary'>
            
            <h1>Order Summary</h1>
            <div className='icon-2'>
               <FontAwesomeIcon id='s' icon={faShoppingBag}></FontAwesomeIcon>
               <FontAwesomeIcon id='m' icon={faMoneyCheckDollar}></FontAwesomeIcon>
            </div>
            <div className='p-div'> 
               <p>Counting here...  {quantity}</p>
               <p>Price : {total}</p>
               <p>Total = : {finalTotal}</p>
               <p id='divide'>---</p>
               <div>
                  <button onClick={()=>removeFromPage(cart)} className='clear-btn'>Cancel</button>
               </div>
               <FontAwesomeIcon className='icon-3' icon={faBook}></FontAwesomeIcon>
               <p className='pera2'><small>@Lorem ipsum dolor, sit amet consectetur adipisicing elit.  enim illum, aliquam repellat!</small></p>
            </div>

        </div>
    );
};

export default OrderList;