<template>
  <div>
    <v-menu v-model="menu" offset-y :close-on-content-click="false">
      <template v-slot:activator="{ on }">
        <v-btn icon color="primary" dark elevation="0" v-on="on">
          <v-icon>mdi-clock-outline</v-icon>
        </v-btn>
      </template>
      <v-time-picker @click="menu = false" v-model="picker" format="24hr" />
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    valuetime: {
      type: String,
      default: new Date().toISOString().substr(0, 10)
    }
  },
  data() {
    return {
      menu: false
    };
  },
  computed: {
    picker: {
      get() {
        return this.valuetime;
      },
      set(val) {
        this.menu = false;
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style scoped>
.picker {
  position: absolute;
  left: 20px;
}
</style>
