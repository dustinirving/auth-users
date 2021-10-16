import axios from 'axios';
import { authApiUrl } from '../config/urls';
import { User } from '../types/user';

const AuthApi = {
  signup: async ({ email, password }: User) => {
    try {
      const response = await axios({
        url: `${authApiUrl}/signup`,
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
        url: `${authApiUrl}/login`,
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
        url: `${authApiUrl}/user`,
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
        url: `${authApiUrl}/logout`,
        method: 'POST',
        withCredentials: true,
      });
      return await response.data;
    } catch (err) {
      return { err };
    }
  },
  googleLogin: async () => {
    try {
      const response = await axios({
        url: `${authApiUrl}/google`,
        method: 'GET',
        withCredentials: true,
      });
      return await response.data;
    } catch (err) {
      return { err };
    }
  },
};

export default AuthApi;
