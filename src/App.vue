<template>
  <v-app>
    <NavBar />
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <LeftsideNav />

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="pa-5">
              <TaskDetails :task-details="taskDetails"/>
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

export default {
  name: "App",

  components: {
    LeftsideNav,
    NavBar,
    TaskDetails,
  },
  mount:{
    
  },
  data: () => ({}),
};
</script>
