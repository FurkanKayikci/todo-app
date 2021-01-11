<template>
  <v-col cols="3">
    <v-sheet rounded="lg">
      <v-list color="transparent">
        <v-list-item color="grey lighten-4">
          <v-list-item-content>
            <v-btn rounded color="deep-purple white--text">
              <v-icon left> mdi-plus </v-icon>
              ADD TASK
            </v-btn>
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
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "LeftsideNav",
  computed: mapGetters({
    tasks: "getTasks",
  }),
  data: () => ({
    return: {
      clickedTask: {},
    },
  }),
  methods: {
      ...mapMutations([
          'setCurrentTask'
      ]),

    showTask(taskId) {
      // find ile yaomayı dene !
      this.clickedTask = this.tasks.filter((task) => task.id === taskId);
      this.setCurrentTask(this.clickedTask[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>