import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    currentTask: {},
    editingTask: []
  },
  mutations: {
    setCurrentTask(state, value) {
      state.currentTask = value;
    },
    setTasks(state, value) {
      state.tasks = value;
    },
    resetCurrentTask(state) {
      state.currentTask = {};
    }
  },
  actions: {
    fetchTasks({ commit }) {
      axios
        .get("https://todo-app-b3e26-default-rtdb.firebaseio.com/tasks.json")
        .then(({ data }) => {
          const tempArray = [];
          for (let key in data) {
            if (!data[key].deleteStatus) {
              tempArray.push({ ...data[key], id: key });
            }
          }
          commit("setTasks", tempArray);
        })
        .catch(/*e => console.log(e)*/);
    },

    addTaskToState(state, newTask) {
      axios
        .post(
          "https://todo-app-b3e26-default-rtdb.firebaseio.com/tasks.json",
          newTask
        )
        .then(({ data }) => {
          newTask.id = data.name;
          this.state.tasks.push(newTask);
        })
        .catch(e => console.log(e));
    },
    deleteTask(state, taskId) {
      return axios
        .delete(
          "https://todo-app-b3e26-default-rtdb.firebaseio.com/tasks/" +
            taskId +
            ".json"
        )
        .then(response => {})
        .catch(e => console.log(e));
    },
    editTask(state, editedTask) {
      return axios
        .put(
          "https://todo-app-b3e26-default-rtdb.firebaseio.com/tasks/" +
            editedTask.key +
            ".json",
          editedTask
        )
        .then(response => {})
        .catch(e => console.log(e));
    }
  },
  modules: {},
  getters: {
    getCurrentTask(state) {
      return state.currentTask;
    },
    getTasks(state) {
      return state.tasks;
    }
  }
});
