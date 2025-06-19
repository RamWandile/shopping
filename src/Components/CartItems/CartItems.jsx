import React, { useContext } from 'react';
import '../CartItems/CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const Cartitems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeToCart } = useContext(ShopContext); // ✅ check the actual name

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] && cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format-main">
                <img src={e.image} alt="" className='cartitems-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantiity'>{cartItems[e.id]}</button>
                <p>₹{e.new_price * cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeToCart(e.id)} alt="remove" />
              </div>
              <hr />
            </div>
          );
        } else {
          return null; // ✅ prevent undefined JSX
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-totalitem">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cartitems-totalitem">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
          </div>
          <hr />
          <div className="cartitems-totalitem">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promocode, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};
