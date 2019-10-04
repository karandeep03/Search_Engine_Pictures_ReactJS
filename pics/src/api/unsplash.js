import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 161ef2c8e16bee300b03e4f395dfdb94731d6e9f9f9d31b448cd6f4800ba48a3'
    }
});