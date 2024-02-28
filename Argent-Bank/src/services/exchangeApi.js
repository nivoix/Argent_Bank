import axios from "axios";
import {
  addFirstName,
  addLastName,
  addMessage,
  addToken,
  clearStore,
} from "../redux";

//obtention du token
function login(credentials, dispatch, navigate, checked) {
  axios
    .post(`http://localhost:3001/api/v1/user/login`, credentials)
    .then(function (res) {
      dispatch(addToken(res.data.body.token));
      navigate("/user");
      if (checked) {
        localStorage.token = res.data.body.token;
        localStorage.email = credentials.email;
        localStorage.password = credentials.password;
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(addMessage(error.response.data.message));
    });
}

// obtention des infos de l'utilisateur
function getUser(token, dispatch, navigate) {
  axios
    .post(`http://localhost:3001/api/v1/user/profile`, "", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (res) {
      dispatch(addFirstName(res.data.body.firstName));
      dispatch(addLastName(res.data.body.lastName));
      localStorage.firstName = res.data.body.firstName;
      return res.data.body;
    })
    .catch((error) => {
      console.log(error);
      navigate("/");
      dispatch(clearStore());
    });
}
// obtention des infos de l'utilisateur
let putUser = (token, dispatch, credentials) => {
  axios
    .put(`http://localhost:3001/api/v1/user/profile`, credentials, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (res) {
      dispatch(addFirstName(res.data.body.firstName));
      dispatch(addLastName(res.data.body.lastName));
      return res.data;
    })
    .catch((error) => console.log(error));
};

//déconnection de l'utilisateur localStorage vidé et store vidé
let logout = (dispatch) => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.token = "null";
  dispatch(clearStore());
};

export { login, logout, getUser, putUser };
