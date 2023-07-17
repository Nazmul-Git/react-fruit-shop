import React from 'react';
import './Product.css'

const Product = (props) => {
    const{addToCart, products}=props;
    const {name, picture,price,about}=props.products;
    
    return (
        <div className='product'>
           <div className='details'>
               <img src={picture} alt="" />
               <p className='fruit-name'>{name}</p>
               <p className='price'> $ {price}</p>
               <p>{about.slice(0,50)}</p>
           </div>

           <button className='btn'>
               <p onClick={()=>{addToCart(products)}} className='btn-text'>Add To Cart +</p>
           </button>

        </div>
    );
};

export default Product;