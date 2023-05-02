import axios from 'axios';

const BASE_URL = 'https://64459ae90431e885f00107ef.mockapi.io/';
const perPage = '3';

export const getUsers = async page => {
  const response = await axios.get(
    `${BASE_URL}users?page=${page}&limit=${perPage}`
  );
  return response;
};
