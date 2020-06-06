<template>
  <v-app id="inspire">
    <v-container class="fill-height">
      <v-card
        class="mx-auto"
        width="400"
        height="400"
        v-for="slide in firstThree"
        :key="slide.name"
        :style="{ backgroundImage: 'url(' + slide.img + ')' }"
      >
        <v-card-title>{{ slide.name }} </v-card-title>
      </v-card>
      <v-row justify="space-around">
        <v-btn @click="prev">Prev</v-btn>
        <v-btn @click="next">Next</v-btn>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      slides: "slideGetter"
    }),
    firstThree() {
      return this.slides.slice(0, 3);
    }
  },
  methods: {
    ...mapMutations(["next", "prev"])
  }
};
</script>

<style lang="scss">
.v-card {
  background-size: cover;
  background-position: center;
  animation: fade-in 1s ease forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
