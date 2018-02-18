import axios from "axios";

const instance = axios.create({
  baseURL: "https://whopper-26d2f.firebaseio.com/"
});

export default instance;