import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams} from "react-router-dom";
import {
  incrementCartItem,decrementCartItem,removeFromCart,showOrder, clearCart
} from "../reducers/cartActions";
import { useEffect, useState } from "react";
import "./CheckOut.css";
import { getProductsById } from "../services/api";

function CheckOut() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    getProductsById(id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id, quantity) => {
    dispatch(removeFromCart(id, quantity));
  };

  const handleIncrement = (id) => {
    dispatch(incrementCartItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementCartItem(id));
  };

  const handleOrderItems = () => {
    dispatch(showOrder(product));
    dispatch(clearCart());
  }

  

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>
      {products.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <div>
          {products.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="cart-item-info">
                <p className="cart-item-title">{product.title}</p>
                <p className="cart-item-price">Price: Rs{product.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <p className="cart-item-quantity">{product.quantity}</p>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </div>
                <button
                  className="remove-button"
                  onClick={() =>
                    handleRemoveFromCart(product.id, product.quantity)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <Link to="/orderConfirmation">
            <button className="confirm-order-button" onClick={ handleOrderItems}>Confirm Order</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CheckOut;
