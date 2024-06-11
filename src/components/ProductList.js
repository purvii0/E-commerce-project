import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../services/api";
import './ProductList.css';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = category ? getProductsByCategory : getProducts;

    fetchProducts(category)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products?.length>0&&products.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>{product?.title}</Link>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
