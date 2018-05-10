import axios from 'axios';
axios.defaults.withCredentials = true;
import Config from '../config';

const AppAPI = {

  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: localStorage.getItem('accessToken') || ''
        }
      }
    });
  },

  async saveUserInfo(data: object) {
       return await  AppAPI.init().post(Config.env.baseURL + '/save-users', data );
  },

  async getUsersInfo() {
        return await  AppAPI.init().get(Config.env.baseURL + '/get-users-info');
  }

};

export default AppAPI;
