import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../src/pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";
import ContactMail from "./pages/ContactMail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProjects,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/contacts/",
      name: "contact",
      component: ContactMail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});
export default router;
