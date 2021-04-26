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
        <tr class="test" v-on:click="ShowExam(course)">
          <td>109</td>
          <td>期末考</td>
          <td>黃思皓</td>
          <td>{{course}}.jpg</td>
        </tr>
        <tr class="test">
          <td>108</td>
          <td>期中考</td>
          <td>{{course}}</td>
          <td>{{course}}.jpg</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
  import CourseService from "../services/CourseService"
  export default{
    props: ["course"],
    data() {
      return {
        ClickedCourse: this.course
      }
    },
    methods:{
      async ShowExam(course){
        const response = await CourseService.course({
          courses: course
        })
        console.log(response.data)
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