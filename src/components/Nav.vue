<template>
  <v-toolbar>
    <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>
  </v-toolbar>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["changeDrawer"])
  }
};
</script>
