<template>

<div class="row">
    <div class="col-2" id="col">
        <listof-grades @clicked="getClicked"></listof-grades>
    </div>
    <div class="col-10" id="col">
        <professor-table v-if="professor" :professor = "professor"/>
        <course-table v-else-if="course" :course="course"></course-table>
        <h5 v-else>請點選左方列表</h5>
    </div>
</div>
</template>

<script>
// import Tab from "../components/Tabs/Tabs.vue";
import ListofGrades from "../layout/ListofGrades.vue";
import Research from "../layout/Research.vue";
import ProfessorTable from "../layout/ProfessorTable.vue";
import CourseTable from "../layout/CourseTable.vue";

export default {
    data() {
        return{
            professor: '',
            course:'',
        }
    },
    components: { 
        // Tab,
        ListofGrades,
        Research,
        ProfessorTable,
        CourseTable,

    },
    methods: {
        getClicked({tab, choosen}){
            if(tab==0){
                this.course = choosen;
                this.professor = '';
            }
            else if(tab==1){
                this.professor = choosen;
                this.course = '';
            }
            // alert(this.professor);
        }
    }
};
</script>
    
<style>
.row {
    margin-left: 2%;
}
#col {
    min-height: calc(100vh - 50px);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.16);
    border-radius: 5px;
}
</style>
