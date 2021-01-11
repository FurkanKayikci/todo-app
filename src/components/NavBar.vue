<template>
    <v-app-bar
      app
      color="white"
      flat
    >
    
      <v-container class="py-0 fill-height">
        <v-img
            class="page-logo"
            max-height="48"
            width="120"
            contain
            src="@/assets/todo-logo.png"
            position="left center"
        ></v-img>

        <v-btn
          class="white--text font-weight-medium"
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    links: [
      ],
  }),
};
</script>

<style lang="scss" scoped>
.page-logo{
    max-height: 48px;
    img{
        height: 100%;
    }
}
</style>