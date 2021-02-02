import Vue from "vue";
import Vuex from "vuex";
import { toDoListActions } from "./actions";
import { toDoListMutations } from "./mutations";
import {
  GET_TO_DO_LIST
} from "./index.constants";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    toDoList: []
  },
  mutations: toDoListMutations,
  actions: toDoListActions,
  getters: {
    [GET_TO_DO_LIST](state) {
      return state.toDoList
    }
  },
  modules: {}
});
