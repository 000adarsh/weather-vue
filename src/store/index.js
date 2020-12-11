import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: null,
    area: null,
    coords: null
  },
  getters: {
    getWeatherData(state) {
      return state.weather;
    },
    getAreaData(state) {
      return state.area;
    },
    getCoordsData(state) {
      return state.coords;
    }
  },
  mutations: {
    WEATHER_SETTER(state, payload) {
      state.weather = payload;
    },
    AREA_SETTER(state, payload) {
      state.area = payload;
    },
    COORDS_SETTER(state, payload) {
      state.coords = payload;
    }
  },
  actions: {
    async weatherFetchAction(context, coords) {
      try {
        const res = await fetch(
          "https://api.climacell.co/v3/weather/nowcast?apikey=aZLoqsu6V8dVLc5iG86QhX1qLpgbGabc&unit_system=si&timestep=5&start_time=now&lon=" +
            coords.longitude +
            "&lat=" +
            coords.latitude +
            "&fields=temp,feels_like,dewpoint,humidity,wind_speed,wind_direction,wind_gust,baro_pressure,precipitation,precipitation_type,sunrise,sunset,visibility,pm25,o3,no2,co,so2"
        );
        const data = await res.json();
        context.commit("WEATHER_SETTER", data[0]);
        // console.log(data[0]);
      } catch (err) {
        console.log("dygscydscc", err);
      }
    },
    async getAreaInformationAction(context, coords) {
      try {
        const res = await fetch(
          "https://us1.locationiq.com/v1/reverse.php?key=pk.e147352c5678a018f251c4a68cb9b8ac&lat=" +
            coords.latitude +
            "&lon=" +
            coords.longitude +
            "&format=json"
        );
        const data = await res.json();
        context.commit("AREA_SETTER", data);
        // console.log(data);
      } catch (err) {
        console.log("urdufghdufhgdfg", err);
      }
    },
    getLocationAction(context) {
      return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(position => {
          context.commit("COORDS_SETTER", position.coords);
          resolve(position.coords);
          console.log(
            "Latitude: " +
              position.coords.latitude +
              " Longitude: " +
              position.coords.longitude
          );
        });
      });
    }
  },
  modules: {}
});
