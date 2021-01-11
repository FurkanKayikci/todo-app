<template>
  <v-app>
    <NavBar />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <LeftsideNav />
          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="pa-5">
              <TaskDetails />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import LeftsideNav from "./components/LeftsideNav";
import TaskDetails from "./components/TaskDetails";
import { mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "App",
  components: {
    LeftsideNav,
    NavBar,
    TaskDetails
  },
  created() {
    axios
      .get("https://todo-app-b3e26-default-rtdb.firebaseio.com/tasks.json")
      .then(response => {
        let data = response.data;
        for (let key in data) {
          if (!data[key].deleteStatus) {
            this.$store.state.tasks.push({ ...data[key], id: key });
          }
        }
      })
      .catch(/*e => console.log(e)*/);
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setCurrentTask"])
  }
};
</script>
