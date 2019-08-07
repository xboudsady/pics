import axios from 'axios';
import config from './config';

const accessKey = config.access_key;
const secretKey = config.secret_key;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  // Header Object
  headers: {
    Authorization: 'Client-ID ' + accessKey
  }
});