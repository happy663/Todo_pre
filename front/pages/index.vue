<template>
  <div>
    <v-row style="position:relative">
      <v-col cols="12" class="col" style="position:relative">
        <div class="tasks">
          <v-card
            v-for="task in tasks"
            :key="task.name"
            class="taskcard"
            style="position:relative"
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
      <!-- <v-btn color="toyama" class="vbtton">
        ADD Task
      </v-btn> -->
      <template>
        <div class="text-center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Click Me
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
      <!-- <v-col style="position:relative"> </v-col> -->
    </v-row>
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
.vbtton {
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  right: 800px;
}
.col {
  margin: 40px;
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
