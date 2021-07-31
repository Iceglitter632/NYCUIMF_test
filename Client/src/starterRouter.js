import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Starter.vue";
import CourseTable from "./layout/CourseTable";
import PastExams from "./layout/PastExams";
import Textbooks from "./layout/Textbooks";
import TextbookTable from "./layout/TextbookTable";

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
 