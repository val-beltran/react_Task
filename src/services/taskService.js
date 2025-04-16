import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks";

export const getTasks = () => axios.get(API_URL);
export const getTask = (id) => axios.get(`${API_URL/{id}}`);
export const createTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);