<template>
<div style="padding-right:10px; margin:2rem;">
  <div id="back">
    <router-link to="/textbooks/" tag="a">{{grade}}</router-link><span>/{{course}}</span>
  </div>
  <div class="tbl-header">
    <table>
      <tr>
        <th class="head">年度</th>
        <th class="head">類別</th>
        <th class="head">老師</th>
        <th class="head">提供者</th>
        <th class="head">檔名</th>
      </tr>
    </table>
  </div>
  <div class="tbl-content">
    <table>
      <tbody>
        <tr v-for="c in this.courses" 
          v-bind:key="c.id"
          class="test"
          v-on:click="Download(c.id)">
          <td>{{c.year}}</td>
          <td>{{c.type}}</td>
          <td>{{c.teacher}}</td>
          <td>某人</td>
          <td>{{c.filename}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>

import DownloadService from "../services/DownloadService";
import CourseService from "../services/CourseService";

export default{
  mounted() {
    this.grade = this.$route.params.grade;
    this.course = this.$route.params.course;
    this.ShowExamTable(this.course);
  },
  data() {
    return {
      grade: null,
      course: null,
      courses: [],
    }
  },
  methods:{
    async Download(courseid){
      await DownloadService.download(courseid);
    },
    async ShowExamTable(c){
      const response = await CourseService.course(c);
      this.courses = response.data;
    }
  }
} 
</script>

<style scoped>
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  border-bottom: solid #5e72e4;
  margin-top: 1em;
 }

.head{
  font-size: 20px;
  padding-left: 15px;
  padding-right: 15px;
}

.tbl-content{
  /* overflow-x:auto; */
  margin-top: 10px;
}

td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-size: 15px;
  color:black;
}

.test:hover {
  background-color: #f4f5f7;
}

#back{
  font-size: large;
}

#back a:hover{
  text-decoration: underline;
}
</style>