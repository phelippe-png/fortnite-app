import axios from "axios";

const apiHttp = axios.create({
    baseURL: 'https://fnbr.co/api/shop',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '1c8636d8-0a6c-40e3-a711-802b90074b3c'
    }
});

export default apiHttp