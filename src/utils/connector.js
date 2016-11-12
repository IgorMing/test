import axios from 'axios';
import { BASE_URL, TIMEOUT } from '../constants/properties';

export const getConnection = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });
}
