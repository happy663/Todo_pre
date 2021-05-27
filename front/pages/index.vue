<template>
  <v-app>
    <v-row>
      <v-col cols="6">
        <v-card v-for="task in tasks" :key="task.name" class="taskcard">
          <v-spacer></v-spacer>
          <v-card-title>{{ task.name }}</v-card-title>
          <v-card-text>
            {{ task.detail }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-btn color="red">
          ADDsodsa
        </v-btn>
      </v-col>
    </v-row>
    <v-row> </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      size: "",
      message: "hhhhhh",
      tasks: [
        { name: "sleep", detail: "とても寝る" },
        { name: "study", detail: "勉強する" },
        { name: "run", detail: "走る" },
        { name: "run", detail: "走る" }
      ]
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

<style scoped>
.taskcard {
  margin: 10px;
}
</style>
