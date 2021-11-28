import axios from 'axios';

const request = axios.create({
  baseURL: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
  params: {limit: 100},
  headers: {
    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
    'x-rapidapi-key': 'your key hehehe',
  },
});
export default request;
