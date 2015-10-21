import axios from 'axios';

function getTussit() {
return axios.get('/api/tussi').then((response) => {
  return response.data;
});

}

const tussit = getTussit();

tussit.then((data) => console.log(data));


export default Api;
