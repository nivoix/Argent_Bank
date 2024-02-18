import axios from "axios";

/**
 * Connexion vers l'API
 * @param {object} credentials
 * @returns {Promise}
 */
let login = (credentials) => {
  return axios.post(`http://localhost:3001/api/v1/user/login`, credentials);
};

/**
 * Connexion vers l'API
 * @param {object} credentials
 * @returns {Promise}
 */
let getuser = (token) => {
  return axios.post(`http://localhost:3001/api/v1/user/profile`, "", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token
 */
let savetoken = (token) => {
  return localStorage.setItem("token", token);
};
/**
 * récupération du token dans le localStorage
 * @param {string} token
 */
let getToken = () => {
  return localStorage.getItem("token");
};

/**
 * Suppression du token du localStorage
 */
let logout = () => {
  localStorage.removeItem("token");
};

/**
 * Etat de la présence d'un token en localStorage
 * @returns {boolean}
 */
let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

export { login, savetoken, logout, isLogged, getuser, getToken };
