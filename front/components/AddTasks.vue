<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          class="vbtton"
        >
          タスクを追加する
        </v-btn>
      </template>
      <v-card height="600px" style="position:relative">
        <v-card-title class="text-h5 grey lighten-2 primary--text">
          追加する
        </v-card-title>
        <v-row>
          <v-card-text style="relative">
            <v-form>
              <v-col cols="8">
                タスク名{{ name }}
                <v-text-field v-model="name"></v-text-field>
              </v-col>
              <v-col cols="9" class="justify-center">
                日付{{ valuedate }}
                <v-text-field v-model="valuedate" single-line>
                  <template v-slot:append-outer>
                    <Date v-model="valuedate"></Date>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="9">
                時間{{ valuetime }}
                <v-text-field v-model="valuetime" single-line>
                  <template v-slot:append-outer>
                    <Time v-model="valuetime"></Time>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="8">
                タスクの詳細{{ detail }}
                <v-text-field v-model="detail"></v-text-field>
              </v-col>
            </v-form>
          </v-card-text>
        </v-row>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="
              dialog = false;
              registerTask();
            "
            class="add"
          >
            追加する
            <!-- {{ picker }}
            {{ time }} -->
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      name: "",
      time: "16:23:21",
      dialog: false,
      valuedate: "",
      valuetime: "",
      detail: ""
    };
  },
  methods: {
    registerTask() {
      this.$store.dispatch("postTask", {
        name: this.name,
        date: this.valuedate,
        time: this.valuetime,
        detail: this.detail
      });
    }
  }
};
</script>

<style scoped>
.vbtton {
  font-size: 20px;
  position: absolute;
  bottom: 10px;
  right: 800px;
}
.time {
  position: absolute;
  right: 20px;
}
.date {
  position: absolute;
  left: 0px;
}
.add {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
