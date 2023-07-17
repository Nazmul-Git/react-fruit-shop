import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping} from '@fortawesome/free-solid-svg-icons';
import OrderList from '../OrderList/OrderList';
import { addToDB, getStoredData, removeFromDb } from '../utilities/localStorage';


const Shop = () => {
    const [shop, setShop]=useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('fruits.json')
        .then(res=>res.json())
        .then(data=>setShop(data))
    },[])
    
    //quantity er vhalue ta kivhabe hobe seta set korteci
    useEffect(()=>{
        let shoppingCart=[];
        const previousStored=getStoredData();
        for(const id in previousStored){
            const finding=shop.find(p=>p.id===id);
            if(finding){
                const quantity=previousStored[id];
                finding.quantity=quantity;
                shoppingCart.push(finding);
            }
            setCart(shoppingCart);
        }
    },[shop])
    
    // add to cart button a click korle j kaj gulo hobe..
    const addToCart=(products)=>{
        // console.log(products);  //products is a object
        
        let newCart=[];
        const exist=cart.find(p=>p.id===products.id);
        // console.log(exist)

        // jodi already item ta thake
        if(exist){
            
            // api er quantity sobgulor 0 set kora ace.
            exist.quantity+=1;  //item thakle setar quantity 1 barasci
            const rest=cart.filter(p=>p.id !== products.id);
            newCart=[...rest, exist];  
        }
        else{
            products.quantity=1;
            newCart=[...cart, products];
            
        }   
        setCart(newCart);
        addToDB(products.id);
    }


    // remove from page & local storage
    const removeFromPage=(props)=>{
        const {cart}=props;
        removeFromDb({cart});
        setCart([]);

    }
        
    
    return (
        <div className='shopping-container'>
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
                
                <OrderList cart={cart} removeFromPage={removeFromPage}></OrderList>
            </div>
        </div>
        </div>
    );
};

export default Shop;