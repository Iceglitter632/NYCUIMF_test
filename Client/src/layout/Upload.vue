<template>
<div>
    <div class="mainupload">
        <span @click="modals.modal0 = true">Upload</span>
    </div>
    <modal :show.sync="modals.modal0"
            body-classes="p-0"
            modal-classes="modal-dialog-centered modal-sm">
        <card type="secondary" shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0">
            <template>
                <form role="form">
                    <base-input alternative
                                class="mb-3 in"
                                placeholder="學年度"
                                v-model="form.year"
                                addon-left-icon="fa fa-graduation-cap">
                    </base-input>
                    <base-input 
                                type="String"
                                placeholder="類別"
                                list="types"
                                v-model="form.type"
                                addon-left-icon="fa fa-file-text-o">
                    </base-input>
                    <datalist id="types">
                        <option v-for="type in types" :value="type" :key="type"></option>
                    </datalist>
                    <base-input alternative
                                type="String"
                                placeholder="課名"
                                list="courses"
                                v-model="form.course"
                                addon-left-icon="fa fa-book">
                    </base-input>
                    <datalist id="courses">
                        <option v-for="course in courses" v-bind:key="course.coursename" 
                        :value="course.coursename"></option>
                    </datalist>
                    <base-input alternative
                                type="String"
                                placeholder="分類"
                                list = "grades"
                                v-model="form.grade"
                                addon-left-icon="fa fa-users">
                    </base-input>
                    <datalist id="grades">
                        <option v-for="grade in grades" v-bind:key="grade" :value="grade"></option>
                    </datalist>
                    <base-input alternative
                                type="String"
                                list=teachers
                                placeholder="老師"
                                v-model="form.teacher"
                                addon-left-icon="fa fa-child"
                                >
                    </base-input>
                    <datalist id="teachers">
                        <option v-for="teacher in teachers" :value="teacher.teacher" 
                        v-bind:key="teacher.teacher"></option>
                    </datalist>

                    <div class="input-container">
                        <input type="file"
                            id="assetsFieldHandle"
                            @change="onFileChange"
                            ref="file"
                            class="input-file" 
                            accept=".pdf,.jpg,.jpeg,.png,.zip,.rar"/>
                        <label for="assetsFieldHandle" class="block cursor-pointer">
                            <div class="uploadbox">
                                <span>Drag file or Click to Upload</span> 
                            </div>
                        </label>
                        <br>
                        <span class="uploaded">{{selectedFile.name}}</span>
                    </div>
                    <div class="text-center">
                        <base-button type="primary" class="my-4" @click="onUploadFile" :disable="!this.selectedFile">Upload</base-button>
                    </div>
                </form>
            </template>
        </card>
    </modal>
    </div>    
</template>

<script>
import Modal from "@/components/Modal.vue";
import CourseService from "../services/CourseService";
import axios from "axios";

export default{
    components: {
        Modal
    },
    mounted(){
        this.GetFromDB();
    },
    data() {
        return {
            files: [],
            modals: {
                modal0: false,
            },
            types: ["期中考","期末考","小考","第一次期中考","第二次期中考"],
            courses: [],
            teachers: [],
            grades: ["大一","大二","大三","大四","通識"],
            selectedFile:'',
            form: {
                year:'',
                type:'',
                course:'',
                teacher:'',
                grade:'',
            }
        };
    },
    methods: {
        onFileChange(e){
            const selectedFile = e.target.files[0];
            this.selectedFile = selectedFile;
        },
        onUploadFile(){
          const formData = new FormData();
          formData.append("file", this.selectedFile);
          axios.post("http://localhost:8081/upload", formData)
          .then(res => {
              console.log(res);
          })
          .catch(e=>{
              console.log(err);
          });
        },
        async GetFromDB() {
            var response = await CourseService.getallcourses();
            this.courses = response.data;
            response = await CourseService.getallteachers();
            this.teachers = response.data;
        }
    }
}
</script>

<style>
.input-file{
    display: none;
}
.input-container {
    text-align: center;
    height: 150px;
}
.block{
    vertical-align: -webkit-baseline-middle;
}
.mainupload :hover{
    text-decoration: underline;
    cursor: pointer;
}
.uploadbox{
    font-size: 16px;
}
.uploadbox :hover{
    text-decoration: underline;
}
.uploaded{
    font-size: 14px;
    color: #8a8a8a;
}
</style>