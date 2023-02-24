import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_DEV,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchSomeData = async () => {
  const response = await api.get('/articles');
  return response.data;
};
