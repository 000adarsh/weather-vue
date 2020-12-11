<template>
  <v-app>
    <v-app-bar app color="primary" dark elevation="4">
      <div class="d-flex align-center">
        <v-icon>cloud</v-icon>
        <span class="ml-4">Weather</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="theme" icon>
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <router-link to="/" icon>
        <v-icon class="mr-4">home</v-icon>
      </router-link>
      <router-link to="/about" icon>
        <v-icon>info</v-icon>
      </router-link>
    </v-app-bar>

    <v-main>
      <transition name="slide">
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    theme(data) {
      if (this.$vuetify.theme.isDark == false) {
        this.$vuetify.theme.isDark = true;
        return;
      }
      if (this.$vuetify.theme.isDark == true) {
        this.$vuetify.theme.isDark = false;
      }
      console.log(data);
    }
  }
};
</script>
