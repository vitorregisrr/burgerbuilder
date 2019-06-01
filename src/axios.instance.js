import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-89a18.firebaseio.com/'
});

export default instance;