<template>

<div class="row">
    <div class="col-2 exams">
        <past-exams @clickedCourse="getCourseClicked"></past-exams>
    </div>
    <div class="col-10 coursetable">
        <course-table :courseClicked="courseClicked" :gradeClicked="gradeClicked"></course-table>
    </div>
</div>
    

</template>

<script>
import PastExams from "../layout/PastExams.vue";
import CourseTable from "../layout/CourseTable.vue";

export default{
  components: { CourseTable , PastExams},

  data() {
      return{
          courseClicked: "",
          gradeClicked: ""
      }
  },
  methods: {
      getCourseClicked(val) {
          this.courseClicked = val[0]; //coursename
          this.gradeClicked =  val[1]; //grade
          console.log(this.courseClicked);
          console.log(this.gradeClicked);
      }
  }
}

</script>

<style scoped>
.exams {
    box-shadow: 1px 1px 1px 1px #dddddf;
    height: 100vh;
    padding-right: 0;
    overflow-y: auto;
}

.coursetable{
    overflow-y: auto;
}

</style>
