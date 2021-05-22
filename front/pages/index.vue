<template>
  <v-app>
    <h1>{{ message }}</h1>
    <h1>saofuasufasoua</h1>
    <input type="text" v-model="message" />
  </v-app>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      name: "",
      size: "",
      message: "hhhhhh"
    };
  },
  methods: {
    chnageName: function() {
      this.message = "おはようございます";
    }
  },
  created() {}
};
</script>
