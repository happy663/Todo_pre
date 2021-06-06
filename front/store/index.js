import { comment } from "postcss";

export const state = () => ({
  list: []
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    });
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  }
};

export const actions = {
  setList(vuexContext, text) {
    vuexContext.commit("add", text);
  },
  toggle(vuexContext, event) {
    vuexContext.commit("toggle", event);
  },
  remove(vuexContext, todo) {
    vuexContext.commit("remove", todo);
  },
  //非同期処理
  postTask(content, task) {
    console.log(task);
    this.$axios
      .post(
        "https://firestore.googleapis.com/v1/projects/todopre-88aa6/databases/(default)/documents/comments",
        {
          fields: {
            name: {
              stringValue: task.name
            }
            
          }
        }
      )
      .then(re => {
        console.log(re);
      });
  }
};
