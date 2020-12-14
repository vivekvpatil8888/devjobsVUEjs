import { createWebHistory, createRouter } from "vue-router";
import JobDetails from "./components/JobDetails.vue";
import Home from "./components/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/job/:id",
    name: "jobdetails",
    component: JobDetails,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
