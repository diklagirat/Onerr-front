import { createStore } from "vuex"
import { gigStore } from "./modules/gig-store"
import { userStore } from "./modules/user-store"

const store = createStore({
  strict: true,
  state: {
    msg: "working..",
  },
  getters: {
    msg({ msg }) {
      return msg;
    },
  },
  mutations: {
    getMsg(state) {
      return state.msg
    },
    resetMsg(state) {
      state.msg = { txt: "", type: "" };
    },
  },
  modules: {
    //TODO: orderStore,
    gigStore,
    userStore,
  },
})

export default store
