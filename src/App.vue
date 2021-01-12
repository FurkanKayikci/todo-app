<template>
  <v-app>
    <NavBar />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <LeftsideNav />
          <v-col>
            <v-sheet max-height="70vh" rounded="lg" class="pa-5">
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
import { mapMutations, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "App",
  components: {
    LeftsideNav,
    NavBar,
    TaskDetails
  },
  created() {
    this.fetchTasks().then(() => {});
  },
  mounted() {},
  data() {
    return {
      tempTasksData: []
    };
  },
  methods: {
    ...mapMutations(["setCurrentTask"]),
    ...mapActions(["fetchTasks"])
  }
};
</script>
