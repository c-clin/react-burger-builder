import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-1f80f.firebaseio.com/"
});

export default instance;
