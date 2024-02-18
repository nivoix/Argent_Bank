import axios from "axios";
import { addFirstName, addLastName, addToken } from "../redux";

function login(credentials, dispatch, navigate) {
  axios
    .post(`http://localhost:3001/api/v1/user/login`, credentials)
    .then(function (res) {
      dispatch(addToken(res.data.body.token));
      navigate("/user");
      return res.data;
    })
    .catch((error) => console.log(error));
}

let getUser = (token, dispatch) => {
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
    .catch((error) => console.log(error));
};

let logout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
};

let isLogged = () => {
  let user = localStorage.getItem("email");
  return !!user;
};

export { login, logout, isLogged, getUser };
