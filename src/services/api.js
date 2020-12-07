/* eslint-disable no-param-reassign */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import config from '../config';

const api = axios.create({
  baseURL: `${config.api.url}/${config.api.version}`,
});

api.interceptors.request.use(async (apiConfig) => {
  apiConfig.headers['access-token'] = await AsyncStorage.getItem('access-token');
  apiConfig.headers.client = await AsyncStorage.getItem('client');
  apiConfig.headers.uid = await AsyncStorage.getItem('uid');

  return apiConfig;
});

export default api;
