/* eslint-disable camelcase */
const { default: axios } = require('src/Utils/api');

const WeeklyAxiosNetwork = {
  Read: async (date) => {
    try {
      const response = await axios.get(`/weekly/read/${date}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  Write: async ({
    date, textContent, string_of_week, number_of_week,
  }) => {
    try {
      const response = await axios.post('/weekly/write', {
        date, content: textContent, string_of_week, number_of_week,
      }, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  Update: async ({
    date, textContent, string_of_week, number_of_week,
  }) => {
    try {
      const response = await axios.post('/weekly/update', {
        date, content: textContent, string_of_week, number_of_week,
      }, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  Delete: async ({ string_of_week, number_of_week }) => {
    try {
      const response = await axios.post('/weekly/delete', { string_of_week, number_of_week }, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

};

export default WeeklyAxiosNetwork;
