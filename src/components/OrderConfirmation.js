import React from "react";
import { useSelector } from "react-redux";
import "./OrderConfirmation.css";

function OrderConfirmation() {
  const products = useSelector((state) => state.cart.order);

  return (
    <div>
      <h2 className="heading">Order Confirmed</h2>
      <h3 className="heading">Thank you for your order! </h3>
      <p>Here are the details of your purchase:</p>
      <div className="productss">
        {products.map((product) => (
          <div className="each-product"
            key={product.id} >
            <img
              src={product.image}
              alt={product.title}
            />
            <div className="details">
            <p> {product.title}</p>
            <p>Price: Rs{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderConfirmation;
