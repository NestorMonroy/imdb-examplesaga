import axios from 'axios';

const baseUrl = 'http://www.omdbapi.com/?apikey=d8735de1&';

export const apiCall = (url, data, headers, method) => axios({
  method,
  url: baseUrl + url,
  data,
  headers

})