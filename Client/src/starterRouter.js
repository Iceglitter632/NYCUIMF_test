import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Starter.vue";
import CourseTable from "./layout/CourseTable";
import ProfessorTable from "./layout/ProfessorTable";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header: Header,
        default: Starter,
        footer: Footer
      }
    },
    {
      path: "/coursetable",
      name: "coursetable",
      component: CourseTable
    },
    {
      path: "/download",
      name: "download",
      component: ProfessorTable
    },
  ]
});
 