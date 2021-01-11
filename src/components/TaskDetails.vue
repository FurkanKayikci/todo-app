<template>
  <div class="task-details-container">
    <div v-if="currentTask.id">
      <v-row class="align-center">
        <v-col>
          <h1 class="mr-3">{{ currentTask.title }}</h1>
          <div class="mt-1 caption">{{ currentTask.date }}</div>
        </v-col>

        <v-col class="md-2 shrink fill-height d-flex justify-end">
          <v-btn icon color="orange">
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "TaskDetails",
  data() {
    return {};
  },
  computed: mapGetters({
    currentTask: "getCurrentTask"
  }),
  methods: {
    ...mapActions(["deleteTask"]),
    deleteTaskEvent(taskKey) {
      console.log("sil buton", taskKey);
      this.deleteTask(taskKey);
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
