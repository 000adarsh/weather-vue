<template>
  <div>
    <v-row>
      <v-col cols="4">
        <div class="ad-container">
          <Adsense
            data-ad-client="ca-pub-8932458145899908"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            :data-full-width-responsive="true"
          >
          </Adsense>
        </div>
      </v-col>
      <v-col cols="4">
        <transition>
          <div>
            <Card
              :weatherProp="weather"
              :areaProp="area"
              @fetchLocation="
                () => {
                  dataFetcher(true);
                }
              "
            />
          </div>
        </transition>
      </v-col>
      <v-col cols="4">
        <div class="ad-container">
          <Adsense
            data-ad-client="ca-pub-8932458145899908"
            data-ad-slot="1234567890"
            data-ad-format="auto"
            :data-full-width-responsive="true"
          >
          </Adsense>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Card from "../components/Card";
export default {
  name: "Home",
  components: {
    Card
  },

  methods: {
    print() {
      console.log(this);
    },
    async dataFetcher(isByPassIf) {
      const coords = await this.$store.dispatch("getLocationAction");
      if (!this.weather || !this.area || isByPassIf) {
        this.$store.dispatch("getAreaInformationAction", coords);
        this.$store.dispatch("weatherFetchAction", coords);
      }
    }
  },
  computed: {
    weather() {
      return this.$store.getters.getWeatherData;
    },
    area() {
      return this.$store.getters.getAreaData;
    }
  },
  mounted() {
    this.dataFetcher();
  }
};
</script>
