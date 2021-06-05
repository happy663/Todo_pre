<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1000px">
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
      <v-card height="800px" style="position:relative">
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>
        <v-card-text style="relative"
          >日付:{{ value }}
          <v-form>
            <v-text-field v-model="value" single-line>
              <template v-slot:append-outer>
                <Date v-model="value"></Date>
              </template>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false" class="add">
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
      time: "16:23:21",
      dialog: false,
      value: null
    };
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
