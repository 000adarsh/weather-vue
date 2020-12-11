<template>
  <v-card class="mx-auto" max-width="400">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ areaProp ? areaProp.display_name : "" }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ Date() }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <div v-if="weatherProp">
      <v-card-text>
        <v-row align="center">
          <v-col class="display-2" cols="8">
            {{ weatherProp.temp.value }} &deg; {{ weatherProp.temp.units }}
          </v-col>
          <v-col cols="4">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sun.png"
              alt="Sunny image"
              width="92"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-send</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle
          >{{ weatherProp.wind_speed.value }}
          {{ weatherProp.wind_speed.units }}</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-download</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>
          {{ weatherProp.humidity.value }}
          {{ weatherProp.humidity.units }}</v-list-item-subtitle
        >
      </v-list-item>
      <div class="mx-12">
        <v-btn @click="getLocation" color="primary">
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
      <v-btn @click="show ? (show = false) : (show = true)" text>
        {{ show ? "Hide Details" : "Full Report" }}
      </v-btn>
    </v-card-actions>
  </v-card>
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
