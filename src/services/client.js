import axios from 'axios';

const api = {
  method: 'GET',
  url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
  params: {limit: '10'},
  headers: {
    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
    'x-rapidapi-key': 'e72cd84cfcmshab37fa9742ace60p12f745jsnbd9287b59b22',
  },
};

axios
  .request(api)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
export default api;
