import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://e-commerce-backend-demo.herokuapp.com/api',
    headers: {
        'Content-type': 'application/json',
    }
});

export default instance;