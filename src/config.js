import axios from "axios";
export const devURL = "http://localhost:4100/api/";
const devEnv = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const axiosClient = axios.create({
  baseURL: devEnv ? devURL : "https://crud-redux-server-1.herokuapp.com/",
});

export default axiosClient;
