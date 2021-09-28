import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/AppHeader";
import Footer from "./layout/AppFooter";
import Home from "./views/Home.vue";
import CourseTable from "./layout/CourseTable";
import PastExams from "./layout/PastExams";
import Textbooks from "./layout/Textbooks";
import TextbookTable from "./layout/TextbookTable";

Vue.use(Router);

export default new Router({ 
  mode: "history",
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header: Header,
        default: Home,
        footer: Footer
      }
    },
    {
      path: "/exams",
      name: "exams",
      components:{
        header: Header,
        default: PastExams,
        footer: Footer
      }
    },
    {
      path: "/textbooks",
      name: "textbooks",
      components:{
        header: Header,
        default: Textbooks,
        footer: Footer
      }
    },
    {
      path: "/exams/:grade/:course",
      name: "exam_course",
      components:{
        header: Header,
        default: CourseTable,
        footer: Footer
      }
    },
    {
      path: "/textbooks/:grade/:course",
      name: "textbooks_course",
      components:{
        header: Header,
        default: TextbookTable,
        footer: Footer
      }
    }
  ]
});
 