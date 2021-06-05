export const state = () => ({});

export const actions = {
  setList(vuexContext, text) {
    vuexContext.commit("add", text);
  },
  toggle(vuexContext, event) {
    vuexContext.commit("toggle", event);
  },
  remove(vuexContext, todo) {
    vuexContext.commit("remove", todo);
  }
};
