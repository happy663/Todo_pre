<template>
  <!-- <v-app :style="{ background: $vuetify.theme.themes.light.background }"> -->
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <!-- <nuxt :style="{ background: $vuetify.theme.themes.light.background }" /> -->
        <nuxt />
      </v-container>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,

      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
