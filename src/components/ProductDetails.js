import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartActions";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleAddToCart = () => {
    // dispatch({ type: 'INCREMENT_CART' }); 
    // dispatch({ type: 'ADD_TO_CART',payload: product }); 
    dispatch(addToCart(product));
  };

  return (
    <div class="main-box">
      <h2>{product.title}</h2>
      <div class="details-box">
        <img src={product.image} alt={product.title} />
      
      <div class="text-box">
        <p>{product.description}</p>
        <p>Price: Rs{product.price}</p>
        <p>Category:{product.category}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>

      
    </div>
  );
}
export default ProductDetails;
