<template>
  <div class="task-details-container">
    <v-row class="align-center">
      <v-col>
        <h1 class="mr-3">{{ currentTask.title }}</h1>
        <div class="mt-1 caption">{{ currentTask.date }}</div>
      </v-col>

      <v-col class="md-2 shrink fill-height d-flex justify-end">
        <v-btn icon color="blue">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>

        <v-btn icon color="orange">
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>

        <v-btn icon color="red">
          <v-icon>mdi-trash-can</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="my-2"></v-divider>

    <div class="task-content">
      {{ currentTask.text }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TaskDetails",
  computed: mapGetters({
    currentTask: "getCurrentTask",
  }),
};
</script>

<style lang="scss" scoped>
.task-content {
  font-size: 1.2rem;
  color: #888;
  line-height: 2;
  text-align: center;
}
</style>