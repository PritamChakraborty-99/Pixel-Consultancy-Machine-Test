import axios from "axios";

const API_URL_login = "https://devadmin.altabooking.com/api/v2/auth/login";

const login = (username, password) => {
    return axios
      .post(API_URL_login, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
};
  
export default {    login
  
};
  