import {
    
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_MESSAGE,
  } from "./types";
  
  import AuthService from "../Services/auth.service";
  

    
    export const login = (reqBody, password) => (dispatch) => {
      return AuthService.login(reqBody, password).then(
        (data) => {
          dispatch({
            type: LOGIN_SUCCESS,
            
            payload:
            {
              headers: { apikey: "indusAltaR2PSM", currency: "U2FsdGVkX1/O0sFe9FnokQdTBRP/rRIlcPZEWbzHL9ncZwZzp/Fu/2Jnt0z8ukCA LQNDRknKwa5WdmjDRC2XA2a0gz/ZfvHeYTIq7fBZi9P4kQ7KvQYueLB2Rl4puqOTSQyBsbLGPc8cQ9KDZLMVapCruTsJcGzRnaOo1CZksLPMzmNOPqe+ePZk6UJiAUmoDS6p4JvL Cmpe0RATiqDh7g==" },
              user: data
            },
          });
    
          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
    
          dispatch({
            type: LOGIN_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    
          return Promise.reject();
        }
      );
    };