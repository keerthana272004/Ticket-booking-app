// api.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:2004/api'; 

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
export const getSeats = () => axiosInstance.get('/seats');

export const updateSeatStatus = (seatId, status, paid) =>
  axiosInstance.put(`/seats/${seatId}`, { status, paid });