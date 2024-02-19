import axios from "axios";
import { addFirstName, addLastName, addToken } from "../redux";

//obtention du token
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

// obtention des infos de l'utilisateur
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

//déconnection du localStorage
let logout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
};

// savoir si l'utilisateur est connecté
let isLogged = () => {
  let user = localStorage.getItem("email");
  return !!user;
};

export { login, logout, isLogged, getUser };
