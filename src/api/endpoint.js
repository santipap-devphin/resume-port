import axios from "axios";
const BASE_URL = "https://top5insure.devphin.tech/service/news/";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate =  axios.create({
    baseURL: BASE_URL , 
    headers:{'Content-Type': 'application/json'},
    withCredentials:true
})