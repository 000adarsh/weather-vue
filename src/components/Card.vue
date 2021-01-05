<template>
  <div class="">
    <v-skeleton-loader
      v-if="!weatherProp"
      height="1000"
      class="mx-auto"
      max-width="400"
      type="card"
    ></v-skeleton-loader>
    <v-card v-else class="pa-5 mx-auto" min-width="320" max-width="400">
      <v-list-item-content class="text-center pa-2">
        <v-row class="mb-0">
          <v-col class="pa-2">
            <h3>
              {{ areaProp ? areaProp.display_name : "" }}
            </h3>
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col class="pa-2">
            <p class="ma-0">{{ Date() }}</p>
          </v-col>
        </v-row>
      </v-list-item-content>

      <div v-if="weatherProp">
        <v-card-text class="pa-2">
          <v-row align="center">
            <v-col class="display-2 pa-0" cols="8">
              {{ weatherProp.temp.value }} &deg;{{ weatherProp.temp.units }}
            </v-col>
            <v-col cols="4">
              <v-img
                contain
                src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                alt="Sunny image"
                width="92"
              ></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-row>
          <v-col class="pb-2">
            <v-icon class="mr-4">mdi-send</v-icon>
            {{ weatherProp.wind_speed.value }}
            {{ weatherProp.wind_speed.units }}</v-col
          >
        </v-row>
        <v-row>
          <v-col class="pt-2">
            <v-icon class="mr-4">mdi-cloud-download</v-icon>
            {{ weatherProp.humidity.value }}
            {{ weatherProp.humidity.units }}</v-col
          >
        </v-row>
        <div class=" mb-2">
          <v-btn @click="getLocation" color="accent">
            Refresh
          </v-btn>
        </div>
        <v-divider></v-divider>

        <v-list v-if="show">
          <v-list-item
            v-for="(item, index) in Object.keys(weatherProp)"
            :key="index"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
            <v-list-item-subtitle>
              {{
                weatherProp[item].value
                  ? weatherProp[item].value
                  : weatherProp[item]
              }}
              {{
                weatherProp[item].units
                  ? weatherProp[item].units
                  : weatherProp[item]
              }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </div>
      <v-card-actions>
        <v-btn
          color="primary"
          @click="show ? (show = false) : (show = true)"
          text
        >
          {{ show ? "Hide Details" : "Full Report" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    weatherProp: Object,
    areaProp: Object,
    dataErrProp: Object
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    getLocation() {
      console.log("get location");
      this.$emit("fetchLocation");
    }
  }
};
</script>
