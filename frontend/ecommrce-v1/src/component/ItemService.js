import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/items';

const createItem = (item) => {
    return axios.post(API_URL, item);
};

const getItems = () => {
    return axios.get(API_URL);
};

const updateItem = (id, item) => {
    return axios.put(`${API_URL}/${id}`, item);
};

const deleteItem = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export { createItem, getItems, updateItem, deleteItem };
