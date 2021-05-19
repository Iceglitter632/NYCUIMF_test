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
                                placeholder="西元年"
                                v-model="form.year"
                                required
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
                        <option v-for="type in types" :key="type">
                            {{type}}
                        </option>
                    </datalist>
                    <base-input alternative
                                type="String"
                                placeholder="課名"
                                list="courses"
                                v-model="form.course"
                                addon-left-icon="fa fa-book">
                    </base-input>
                    <datalist id="courses">
                        <option v-for="course in courses" v-bind:key="course.coursename" >
                            {{course.coursename}}
                        </option>
                    </datalist>
                    <base-input alternative
                                type="String"
                                placeholder="年級"
                                list = "grades"
                                v-model="form.grade"
                                addon-left-icon="fa fa-users">
                    </base-input>
                    <datalist id="grades">
                        <option v-for="grade in grades" v-bind:key="grade">
                            {{grade}}
                        </option>
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
                        <option v-for="teacher in teachers" v-bind:key="teacher.teacher">
                            {{teacher.teacher}}
                        </option>
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
                                <span>Click to Upload File</span> 
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
import UploadService from '../services/Upload';
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
            modals: {
                modal0: false,
            },
            types: ["期中考","期末考","小考","第一次期中考","第二次期中考"],
            courses: [],
            teachers: [],
            grades: ["大一","大二","大三","大四","通識"],
            selectedFile: '',
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
        async GetFromDB() {
            var response = await CourseService.getallcourses();
            this.courses = response.data;
            response = await CourseService.getallteachers();
            this.teachers = response.data;
        },
        onFileChange(e){
            this.selectedFile = e.target.files[0];
        },
        onUploadFile(){
          const formData = new FormData();
          formData.append("file", this.selectedFile);
          formData.append("year", this.form.year);
          formData.append("type", this.form.type);
          formData.append("course", this.form.course);
          formData.append("teacher", this.form.teacher);
          formData.append("grade", this.form.grade);

          UploadService.upload(formData);
        //   axios.post("http://localhost:8081/upload", formData)
        //   .then(res => {
        //       console.log(res);
        //   })
        //   .catch(e=>{
        //       console.log(err);
        //   });
          this.ClearForm();
        },
        ClearForm(){
            this.selectedFile = '';
            this.form.year = '';
            this.form.type = '';
            this.form.course = '';
            this.form.teacher = '';
            this.form.grade = '';
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