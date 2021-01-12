<template>
  <v-col cols="12" lg="3" md="4" sm="12">
    <v-sheet rounded="lg" class="mh-70">
      <v-list color="transparent" class="scroll">
        <v-list-item color="grey lighten-4">
          <v-list-item-content>
            <AddTask></AddTask>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list rounded>
          <v-list-item-group color="deep-purple">
            <v-list-item
              v-for="task in tasks"
              :key="task.id"
              @click="showTask(task.id)"
            >
              <v-list-item-icon>
                <v-icon>mdi-circle-medium</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="task.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
import AddTask from "./AddTask.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "LeftsideNav",
  computed: mapGetters({
    tasks: "getTasks"
  }),
  components: {
    AddTask
  },
  data() {
    return {
      clickedTask: null
    };
  },
  methods: {
    ...mapMutations(["setCurrentTask"]),

    showTask(taskId) {
      this.clickedTask = this.tasks.find(t => t.id === taskId);
      this.setCurrentTask(this.clickedTask);
    }
  }
};
</script>

<style lang="scss" scoped>
.mh-70 {
  height: 70vh;
}
.scroll {
  overflow-y: auto;
}
</style>
