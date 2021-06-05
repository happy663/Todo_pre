<template>
  <div>
    <v-time-picker
      format="24hr"
      v-model="time"
      width="400px"
      class="time"
    ></v-time-picker>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      time: "16:23:21"
    };
  }
};
</script>

<style>
.time {
  position: absolute;
  right: 20px;
}
</style>
