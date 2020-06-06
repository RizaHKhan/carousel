import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slide: [
      {
        img: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixlib=rb-1.2.1&w=1000&q=80",
        name: "Ferrary"
      },
      {
        img: "https://officialbespoke.com/wp-content/uploads/2019/09/15052019_New-McLaren-GT_4.jpg",
        name: "Maclaren"
      },
      {
        img: "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixlib=rb-1.2.1&w=1000&q=80",
        name: "Lamborgini"
      },
      {
        img: "https://images.financialexpress.com/2016/09/McLaren-P1-L-620x413.jpg",
        name: "Aston Martin"
      },
      {
        img:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-aston-martin-vantage-amr-132-1571762595.jpg?crop=0.697xw:0.784xh;0.303xw,0.216xh&resize=640:*",
        name: "Cardillac"
      }
    ]
  },
  getters: {
    slideGetter: state => state.slide
  },
  mutations: {
    next(state) {
      let popped = state.slide.pop();
      state.slide.unshift(popped);
    },
    prev(state) {
      let shifted = state.slide.shift();
      state.slide.push(shifted);
    }
  },
  actions: {},
  modules: {}
});
