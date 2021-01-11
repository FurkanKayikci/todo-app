import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: "0",
        title: "Duş al",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, at maiores.",
        date: "03.02.2019",
      },
      {
        id: "1",
        title: "Ütü Yap",
        text:
          "Deleniti, recusandae expedita! Non molestiae modi sed ducimus atque nobis dolorum optio facilis quas itaque asperiores quasi commodi quod fuga",
        date: "03.02.2019",
      },
      {
        id: "2",
        title: "Kahvaltı Yap",
        text:
          "Accusamus, voluptatibus adipisci facilis animi nihil, culpa omnis debitis ex repudiandae consectetur voluptatum.",
        date: "03.02.2019",
      }
    ],
    currentTask: {
      id: "0",
      title: "Duş al",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, at maiores.",
      date: "03.02.2019",
    }
  },
  mutations: {
    setCurrentTask(state, value) {
      state.currentTask = value;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCurrentTask(state) {
      return state.currentTask
    },
    getTasks(state) {
      return state.tasks
    }
  }
})
