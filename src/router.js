import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/city/:cityName/:countryCode",
      name: "CityDetails",
      component: () => import("./pages/CityDetails.vue")
    },
    {
      path: "/city",
      name: "city",
      component: () => import("./pages/City.vue")
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("./pages/Jobs.vue")
    },
    {
      path: "/conferences",
      name: "conferences",
      component: () => import("./pages/Conferences.vue")
    },
    {
      path: "/learn",
      name: "learn",
      component: () => import("./pages/Learn.vue")
    }
  ]
});