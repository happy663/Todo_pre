<template>
  <div>
    <v-container>
      <v-row style="position:relative" justify="center">
        <v-col cols="12" class="col" style="position:relative">
          <div class="tasks">
            <v-card
              v-for="task in tasks"
              :key="task.name"
              class="taskcard"
              style="position:relative"
              shaped
            >
              <v-spacer></v-spacer>
              <v-card-title>{{ task.name }}</v-card-title>
              <v-card-text>
                {{ task.detail }}
              </v-card-text>
              <v-btn class="delete" fab color="red">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn fab class="pencil">
                <v-icon>mdi-lead-pencil</v-icon>
              </v-btn>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12">
          <AddTasks></AddTasks>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
        { name: "run", detail: "走る" }
      ],
      dialog: false
    };
  },
  methods: {
    chnageName: function() {
      this.message = "おはようございます";
    },
    registerTask() {
      this.$store.dispatch("postTask", this.tasks);
    }
  },
  created() {}
};
</script>

<style scoped>
.taskcard {
  margin: 10px;
}
.col {
  margin: 15px;
  padding: 5px;
}
.delete {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.pencil {
  bottom: 10px;
  left: 5px;
}
</style>
