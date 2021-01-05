<template>
  <div>
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
    setTimeout(() => {
      this.dataFetcher(true);
    }, 1000);
  }
};
</script>
