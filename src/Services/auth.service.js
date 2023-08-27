import axios from "axios";

const API_URL_login = "https://devadmin.altabooking.com/api/v2/auth/login";

const head = { apikey:"indusAltaR2PSM", currency:"U2FsdGVkX1/O0sFe9FnokQdTBRP/rRIlcPZEWbzHL9ncZwZzp/Fu/2Jnt0z8ukCA LQNDRknKwa5WdmjDRC2XA2a0gz/ZfvHeYTIq7fBZi9P4kQ7KvQYueLB2Rl4puqOTSQyBsbLGPc8cQ9KDZLMVapCruTsJcGzRnaOo1CZksLPMzmNOPqe+ePZk6UJiAUmoDS6p4JvL Cmpe0RATiqDh7g==" }


const login = async (reqBody, password) => {
    const response = await axios
    .post(API_URL_login, {
      reqBody,
      password,
    }, {headers : head});
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};









  
export default {    login
  
};
  