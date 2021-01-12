<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
    transition="dialog-top-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn rounded color="deep-purple white--text" v-bind="attrs" v-on="on">
        <v-icon left> mdi-plus </v-icon>
        ADD TASK
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="deep-purple" dark>Add Task</v-toolbar>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                id="taskName"
                v-model="taskName"
                type="text"
                name="taskName"
                dense
                color="deep-purple"
                outlined
                label="Task Name"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                id="taskExplanation"
                v-model="taskExplanation"
                type="text"
                name="taskExplanation"
                dense
                color="deep-purple"
                outlined
                label="Task Explanation"
                hide-details
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="deep-purple" text @click="addTaskForm">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTask",
  data() {
    return {
      dialog: false,
      taskName: "",
      taskExplanation: ""
    };
  },
  methods: {
    ...mapActions(["addTaskToState", "fetchTasks"]),
    addTaskForm() {
      const taskLength = this.$store.state.tasks.length;
      const tempTask = {
        id: taskLength ? taskLength + 1 : 0,
        title: this.taskName,
        text: this.taskExplanation,
        date: new Date().toLocaleString(),
        deleteStatus: false
      };
      this.addTaskToState(tempTask);
      this.dialog = false;
      this.taskName = "";
      this.taskExplanation = "";
    }
  }
};
</script>

<style scoped lang="scss">
.v-toolbar {
  box-shadow: none !important;
}
</style>
