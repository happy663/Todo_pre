<template>
  <div>
    <v-date-picker v-model="picker" class="date" width="450px"></v-date-picker>
  </div>
</template>

  <script>
    export default {
      setup() {},
      data() {
        return {
          picker: new Date().toISOString().substr(0, 10)
        };
      }
    };
  </script>

  <style scoped>
    .date {
      position: absolute;
      left: 20px;
    }
  </style>
</template>
