import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary/",
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apod: {},
  },
  mutations: {
    setAPOD(state, apod) {
      console.log(apod);
      state.apod = apod;
      console.log(apod);
    },
  },
  actions: {
    async getAPOD(
      { commit, dispatch },
      query = "apod?api_key=3XeLMEdtRCStlISc8SKFubs6fmWtBqZvOWaFAask&date=2020-06-02"
    ) {
      try {
        let res = await _api.get(query);
        console.log(res);
        commit("setAPOD", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getRandomAPOD({ commit, dispatch }) {
      let lastYear = 1559510363 * 1000;
      let currentYear = 1591132763 * 1000;
      let randomDay = Math.round(
        Math.random() * (currentYear - lastYear) + lastYear
      );
      var date = new Date(randomDay);
      var year = date.getUTCFullYear();
      var month = date.getUTCMonth() + 1;
      var day = date.getUTCDate();
      var dateString = `${year}-${
        month.toString().length == 1 ? "0" + month : month
      }-${day.toString().length == 1 ? "0" + day : day}`;
      try {
        let res = await _api.get(
          "apod?api_key=3XeLMEdtRCStlISc8SKFubs6fmWtBqZvOWaFAask&date=" +
            dateString
        );
        commit("setAPOD", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
