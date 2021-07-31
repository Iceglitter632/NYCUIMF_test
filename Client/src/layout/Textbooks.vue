<template>
<collapse>
    <collapse-item title="大一" name="1">
        <router-link tag="div" v-for="(item, index) in freshmen" :key="index" class="subjects" 
        :to="'textbooks/1/'+item.coursename">
            <p class="courser">{{item.coursename}}</p>
        </router-link>
    </collapse-item>
    <collapse-item title="大二" name="2">
        <router-link tag="div" v-for="(item, index) in sophomore" :key="index" class="subjects" 
        :to="'textbooks/2/'+item.coursename">
            <p class="courser">{{item.coursename}}</p>
        </router-link>
    </collapse-item>
    <collapse-item title="大三" name="3">
        <router-link tag="div" v-for="(item, index) in junior" :key="index" class="subjects" 
        :to="'textbooks/3/'+item.coursename">
            <p class="courser">{{item.coursename}}</p>
        </router-link>
    </collapse-item>
    <collapse-item title="大四" name="4">
        <router-link tag="div" v-for="(item, index) in senior" :key="index" class="subjects" 
        :to="'textbooks/4/'+item.coursename">
            <p class="courser">{{item.coursename}}</p>
        </router-link>
    </collapse-item>
    <collapse-item title="其他課程" name="5">
        <router-link tag="div" v-for="(item, index) in other" :key="index" class="subjects"
        :to="'textbooks/other/'+item.coursename">
            <p class="courser">{{item.coursename}}</p>
        </router-link>
    </collapse-item>
</collapse>
</template>

<script>
import Collapse from '../components/Collapse/Collapse.vue';
import CollapseItem from "../components/Collapse/CollapseItem.vue";
import CourseService from "../services/CourseService";

export default{
  components: { CollapseItem, Collapse },
  mounted() {
      this.ShowCourses()
  },
  data() {
      return {
          courses: [
          "微積分(甲)",
          "微積分(乙)",
          "會計(一)",
          "經濟學原理(一)",
          "程式設計",
          ],
          freshmen: [],
          sophomore: [],
          junior: [],
          senior: [],
          other:[],
        }    
    },
    methods: {
        async ShowCourses(){
            var response = await CourseService.courseforeachgrade(1);
            this.freshmen = response.data;
            response = await CourseService.courseforeachgrade(2);
            this.sophomore = response.data;
            response = await CourseService.courseforeachgrade(3);
            this.junior = response.data;
            response = await CourseService.courseforeachgrade(4);
            this.senior = response.data;
            response = await CourseService.courseforeachgrade(5);
            this.other = response.data;
        }
    }

}

</script>

<style scoped>
.subjects {
    padding: 0.3rem;
}

.subjects:hover {
    background-color: #e7e8eb;
}

.courser{
    margin-left: 15px;
    margin-top: auto;
    margin-bottom: auto;
}

</style>