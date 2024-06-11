import React, { useState } from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Header from'./Header';

function Home(){
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div>
      <div style={{ display: 'flex', marginTop: '50px' }}>
        <CategoryList onSelectCategory={handleCategorySelect} />
        <ProductList category={selectedCategory} />
      </div>
    </div>
  );
}
export default Home;