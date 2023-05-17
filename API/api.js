import axios from "axios";

const apiHttp = axios.create({
  baseURL: 'https://fnbr.co/api/shop',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'b02f96eb-cc3a-411a-a695-3cff6f0067ce'
  }
});

export default apiHttp