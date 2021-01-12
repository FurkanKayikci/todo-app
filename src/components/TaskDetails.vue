<template>
  <div class="task-details-container">
    <div v-if="currentTask.id">
      <v-row class="align-center">
        <v-col>
          <h1 class="mr-3">{{ currentTask.title }}</h1>
          <div class="mt-1 caption">{{ currentTask.date }}</div>
        </v-col>

        <v-col class="md-2 shrink fill-height d-flex justify-end">
          <v-btn icon color="orange" @click="dialog = true">
            <v-icon>mdi-pencil-outline</v-icon>
          </v-btn>

          <v-btn icon color="red" @click="deleteTaskEvent(currentTask.id)">
            <v-icon>mdi-trash-can</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider class="my-2"></v-divider>

      <div class="task-content">
        {{ currentTask.text }}
      </div>
    </div>
    <template v-if="!currentTask.id">
      <div class="task-detail-empty">
        <img src="@/assets/todo-logo.png" alt="" />
        <div class="loader">
          <div class="dots"></div>
          <div class="dots"></div>
          <div class="dots"></div>
          <div class="dots"></div>
          <div class="dots"></div>
        </div>
      </div>
    </template>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-toolbar color="deep-purple" dark>Add Task</v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  id="taskName"
                  v-model="currentTask.title"
                  type="text"
                  name="taskName"
                  dense
                  color="deep-purple"
                  outlined
                  label="Task Name"
                  hide-details
                  :value="currentTask.title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  id="taskExplanation"
                  v-model="currentTask.text"
                  type="text"
                  name="taskExplanation"
                  dense
                  color="deep-purple"
                  outlined
                  label="Task Explanation"
                  hide-details
                  :value="currentTask.text"
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
          <v-btn
            color="deep-purple"
            text
            @click="editTaskEvent(currentTask.id)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";
export default {
  name: "TaskDetails",
  data() {
    return {
      dialog: false,
      taskName: "",
      taskExplanation: ""
    };
  },
  computed: {
    ...mapState(["currentTask"])
  },
  methods: {
    ...mapActions(["deleteTask", "fetchTasks", "editTask"]),
    ...mapMutations(["resetCurrentTask"]),

    deleteTaskEvent(taskKey) {
      this.deleteTask(taskKey).finally(() => {
        this.fetchTasks();
        this.resetCurrentTask();
      });
    },
    editTaskEvent(taskKey) {
      const tempTask = {
        title: this.currentTask.title,
        text: this.currentTask.text,
        key: taskKey
      };
      this.editTask(tempTask).finally(() => {
        this.dialog = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.task-content {
  font-size: 1.2rem;
  color: #888;
  line-height: 2;
  text-align: center;
}
.task-detail-empty {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 70vh;
  img {
    height: 72px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .loader {
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -100%);
    .dots {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 1rem;
      margin: 10px;
      display: inline-block;
      background: #333;
      transform: scale(1);
      animation: loader-anim 1.2s infinite;
    }
    .dots:nth-child(2) {
      animation-delay: 0.2s;
    }
    .dots:nth-child(3) {
      animation-delay: 0.4s;
    }
    .dots:nth-child(4) {
      animation-delay: 0.8s;
    }
    .dots:nth-child(5) {
      animation-delay: 1s;
    }
    .dots:nth-child(6) {
      animation-delay: 1.2s;
    }

    @keyframes loader-anim {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
    }
  }
}
</style>
