import axios from 'axios';
import { apiUrl } from '../config/urls';
import { User } from '../types/user';

const AuthApi = {
  signup: async ({ email, password }: User) => {
    try {
      const response = await axios({
        url: `${apiUrl}/signup`,
        method: 'POST',
        data: {
          email,
          password,
        },
        withCredentials: true,
      });
      return await response.data;
    } catch (err) {
      return { err };
    }
  },

  login: async ({ email, password }: User) => {
    try {
      const response = await axios({
        url: `${apiUrl}/login`,
        method: 'POST',
        data: {
          email,
          password,
        },
        withCredentials: true,
      });
      return await response.data;
    } catch (err) {
      return { err };
    }
  },
  getUser: async () => {
    try {
      const response = await axios({
        url: 'http://localhost:8080/user',
        method: 'GET',
        withCredentials: true,
      });
      return await response.data;
    } catch (err) {
      return { err };
    }
  },
  logout: async () => {
    try {
      const response = await axios({
        url: 'http://localhost:8080/logout',
        method: 'POST',
        withCredentials: true,
      });
      return await response.data;
    } catch (err) {
      return { err };
    }
  },
};

export default AuthApi;
