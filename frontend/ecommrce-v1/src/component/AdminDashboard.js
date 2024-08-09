import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [newProduct, setNewProduct] = useState({ name: '', category: '' });
    const [editingCategoryId, setEditingCategoryId] = useState(null);
    const [editCategoryName, setEditCategoryName] = useState('');
    const [editingProductId, setEditingProductId] = useState(null);
    const [editProduct, setEditProduct] = useState({ name: '', category: '' });
    useAuth();

    // Fetch categories and products
    const fetchCategories = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/categories');
            setCategories(result.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/v1/products');
            setProducts(result.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []); // Empty dependency array means this effect runs once on mount

    // Add category
    const addCategory = async () => {
        try {
            await axios.post('http://localhost:8080/api/v1/categories', { name: newCategory });
            setNewCategory('');
            fetchCategories();
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    // Start editing category
    const startEditing = (id, name) => {
        setEditingCategoryId(id);
        setEditCategoryName(name);
    };

    // Save edited category
    const saveEdit = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/v1/categories/${id}`, { name: editCategoryName });
            setEditingCategoryId(null);
            setEditCategoryName('');
            fetchCategories();
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    // Cancel editing category
    const cancelEdit = () => {
        setEditingCategoryId(null);
        setEditCategoryName('');
    };

    // Delete category
    const deleteCategory = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/categories/${id}`);
            fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    // Add product
    const addProduct = async () => {
        try {
            await axios.post('http://localhost:8080/api/v1/products', newProduct);
            setNewProduct({ name: '', category: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    // Start editing product
    const startEditingProduct = (id, name, category) => {
        setEditingProductId(id);
        setEditProduct({ name, category });
    };

    // Save edited product
    const saveEditProduct = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/v1/products/${id}`, editProduct);
            setEditingProductId(null);
            setEditProduct({ name: '', category: '' });
            fetchProducts();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Cancel editing product
    const cancelEditProduct = () => {
        setEditingProductId(null);
        setEditProduct({ name: '', category: '' });
    };

    // Delete product
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/products/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="dashboard-container">            
          <div className="main-content">
            {/* Manage Categories */}
            <div className="content-section manage-categories-section">
              <h2>Manage Categories</h2>
              <input
                type="text"
                placeholder="Category Name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button className="button" onClick={addCategory}>Add Category</button>
              <table className="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(category => (
                    <tr key={category.id}>
                      <td>
                        {editingCategoryId === category.id ? (
                          <input
                            type="text"
                            value={editCategoryName}
                            onChange={(e) => setEditCategoryName(e.target.value)}
                          />
                        ) : (
                          category.name
                        )}
                      </td>
                      <td>
                        {editingCategoryId === category.id ? (
                          <>
                            <button className="button" onClick={() => saveEdit(category.id)}>Save</button>
                            <button className="button" onClick={cancelEdit}>Cancel</button>
                          </>
                        ) : (
                          <>
                            <button className="button" onClick={() => startEditing(category.id, category.name)}>Edit</button>
                            <button className="button" onClick={() => deleteCategory(category.id)}>Delete</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      
            {/* Manage Products */}
            <div className="content-section manage-products-section">
              <h2>Manage Products</h2>
              
              {/* Product Name */}
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
              
              {/* Category */}
              <select
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </select>
              
              {/* Price */}
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
              
              {/* Short Description */}
              <textarea
                placeholder="Short Description"
                value={newProduct.shortDescription}
                onChange={(e) => setNewProduct({ ...newProduct, shortDescription: e.target.value })}
              />
              
              {/* Image URL */}
              <input
                type="text"
                placeholder="Image URL"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              />
              
              <button className="button" onClick={addProduct}>Add Product</button>
              
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>
                        {editingProductId === product.id ? (
                          <input
                            type="text"
                            value={editProduct.name}
                            onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                          />
                        ) : (
                          product.name
                        )}
                      </td>
                      <td>
                        {editingProductId === product.id ? (
                          <select
                            value={editProduct.category}
                            onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
                          >
                            <option value="">Select Category</option>
                            {categories.map(category => (
                              <option key={category.id} value={category.name}>{category.name}</option>
                            ))}
                          </select>
                        ) : (
                          product.category
                        )}
                      </td>
                      <td>
                        {editingProductId === product.id ? (
                          <input
                            type="number"
                            value={editProduct.price}
                            onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                          />
                        ) : (
                          `$${product.price}`
                        )}
                      </td>
                      <td>
                        {editingProductId === product.id ? (
                          <textarea
                            value={editProduct.shortDescription}
                            onChange={(e) => setEditProduct({ ...editProduct, shortDescription: e.target.value })}
                          />
                        ) : (
                          product.shortDescription
                        )}
                      </td>
                      <td>
                        {editingProductId === product.id ? (
                          <input
                            type="text"
                            value={editProduct.image}
                            onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
                          />
                        ) : (
                          <img src={product.image} alt={product.name} width="50" height="50" />
                        )}
                      </td>
                      <td>
                        {editingProductId === product.id ? (
                          <>
                            <button className="button" onClick={() => saveEditProduct(product.id)}>Save</button>
                            <button className="button" onClick={cancelEditProduct}>Cancel</button>
                          </>
                        ) : (
                          <>
                            <button className="button" onClick={() => startEditingProduct(product.id, product.name, product.category, product.price, product.shortDescription, product.image)}>Edit</button>
                            <button className="button" onClick={() => deleteProduct(product.id)}>Delete</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
      
};

export default AdminDashboard;
