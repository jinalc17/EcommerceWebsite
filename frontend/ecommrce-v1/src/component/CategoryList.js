import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoryList.css';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = activeTab === 'all' ? categories : categories.filter(category => category.type === activeTab);

  return (
    <div className="category-list-container">
      <div className="tabs">
        <button className={`tab-button ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Categories</button>
        <button className={`tab-button ${activeTab === 'laptop' ? 'active' : ''}`} onClick={() => setActiveTab('laptop')}>Laptop</button>
        <button className={`tab-button ${activeTab === 'tablet' ? 'active' : ''}`} onClick={() => setActiveTab('tablet')}>Tablet</button>
        <button className={`tab-button ${activeTab === 'smartphone' ? 'active' : ''}`} onClick={() => setActiveTab('smartphone')}>Smart Phone</button>
      </div>
      <div className="category-list">
        {filteredCategories.map(category => (
          <div className="category-item" key={category.id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
