import axios, {get, put} from "axios";
// Base URL for the backend API
// Going to be changed to docker container URL when deployed
const http = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api",
});

console.log("HTTP Service Base URL:", http.defaults.baseURL);

export default http

