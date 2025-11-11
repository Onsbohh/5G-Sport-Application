import axios, {get, put} from "axios";
// Base URL for the backend API
// Going to be changed to docker container URL when deployed
const http = axios.create({
    baseURL: "http://localhost:8080/api",
});

export default {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
};

