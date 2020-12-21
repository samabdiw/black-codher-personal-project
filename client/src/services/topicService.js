/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  getAll: async () => {
    const res = await axios.get(`/api/topic`);
    return res.data || [];
  },
};
