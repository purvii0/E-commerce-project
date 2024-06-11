import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { getCategories } from "../services/api";

function CategoryList({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    getCategories()
      .then(response => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category === ' ' ? '' : category);
    onSelectCategory(category === ' ' ? '' : category);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const labelStyle = {
    display: "block",
    margin: "10px",
  };

  return (
    <div>
      <h2>Categories</h2>
      <div>
        <label style={labelStyle}>
          <input
            type="radio"
            value=" "
            checked={selectedCategory === ''}
            onChange={handleCategoryChange}
          />
          All
        </label>

        {categories.map((category) => (
          <label key={category} style={labelStyle} >
            <input
              type="radio"
              checked={selectedCategory ===category}
              value={category} 
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
}


export default CategoryList;