import axios from 'axios';

const URL = 'https://mywalletv2-back.herokuapp.com/ ';

const config = token => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};

const signInUser = user => {
  return axios.post(`${URL}sign-in`, user);
};

const signUpUser = user => {
  return axios.post(`${URL}sign-up`, user);
};

const signOutUser = token => {
  return axios.delete(`${URL}sign-out`, config(token));
};

const getTransactions = token => {
  return axios.get(`${URL}transactions`, config(token));
};

const getBalance = token => {
  return axios.get(`${URL}balance`, config(token));
};

const postTransaction = (body, token) => {
  return axios.post(`${URL}transaction`, body, config(token));
};

export {
  signInUser,
  signUpUser,
  signOutUser,
  getTransactions,
  getBalance,
  postTransaction,
};
