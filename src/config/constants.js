//constants.js
//export const API_URL = "http://localhost:8080";
//export const API_URL = "https://mango-shop-server1.herokuapp.com";
export const API_URL = process.env.NODE_ENV === 'production'? "https://react-app-surver.herokuapp.com" : "http://localhost:8080";