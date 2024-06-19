import axios from "axios";

const BASE_URL = "https://capstoneapi-1-d1099982.deta.app";
export default axios.create({
    baseURL: BASE_URL
});