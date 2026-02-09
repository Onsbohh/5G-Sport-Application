import axios, {get, put} from "axios";
// Base URL for the backend API
// Going to be changed to docker container URL when deployed
const http = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://194.110.231.198/api'
});

console.log("HTTP Service Base URL:", http.defaults.baseURL);

export default http

