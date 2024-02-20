import axios from "axios";
import { addFirstName, addLastName, addToken, clearState } from "../redux";

//obtention du token
function login(credentials, dispatch, navigate) {
  axios
    .post(`http://localhost:3001/api/v1/user/login`, credentials)
    .then(function (res) {
      dispatch(addToken(res.data.body.token));
      navigate("/user");
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      console.log(error.response.data.message);
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
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      navigate("/");
      dispatch(clearState());
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

//déconnection du localStorage
let logout = (dispatch) => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  dispatch(clearState());
};

export { login, logout, getUser, putUser };
