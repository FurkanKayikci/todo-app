import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    currentTask: {}
  },
  mutations: {
    setCurrentTask(state, value) {
      state.currentTask = value;
    }
  },
  actions: {
    addTaskToState(state, newTask) {
      axios
        .post(
          "https://todo-app-b3e26-default-rtdb.firebaseio.com/tasks.json",
          newTask[0]
        )
        .then(response => {
          this.state.tasks.push(newTask[0]);
        })
        .catch(e => console.log(e));
    },
    deleteTask(state, taskId) {
      axios
        .post("https://todo-app-b3e26-default-rtdb.firebaseio.com/tasks.json", {
          key: taskId
        })
        .then(response => {
          let data = response.data;
          for (let key in data) {
            if (key === taskId) {
              data[key].deleteStatus = true;
            }
          }
          console.log("response", response);
        })
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
