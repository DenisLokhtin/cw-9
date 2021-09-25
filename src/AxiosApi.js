import axios from 'axios';

const AxiosApi = axios.create({
    baseURL: 'https://cw-9-758a5-default-rtdb.europe-west1.firebasedatabase.app'
});

export default AxiosApi;