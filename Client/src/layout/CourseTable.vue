<template>
<div style="padding-right:10px;">
  <div class="tbl-header">
    <table>
      <tr>
        <th class="head">年度</th>
        <th class="head">類別</th>
        <th class="head">老師</th>
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
  props: ["course"],
  mounted() {
    this.ShowExamTable(this.course);
  },
  data() {
    return {
      courses: []
    }
  },
  watch:{
    course: function(newVal, oldVal){
      this.ShowExamTable(newVal);
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
</style>