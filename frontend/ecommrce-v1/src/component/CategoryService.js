import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/categories';

const createCategory = (category) => {
    return axios.post(API_URL, category);
};

const getCategories = () => {
    return axios.get(API_URL);
};

const updateCategory = (id, category) => {
    return axios.put(`${API_URL}/${id}`, category);
};

const deleteCategory = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export { createCategory, getCategories, updateCategory, deleteCategory };
