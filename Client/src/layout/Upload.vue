<template>
<div>
    <div class="mainupload">
        <a @click="modals.modal0 = true">Upload</a>
    </div>
    <modal :show.sync="modals.modal0"
            body-classes="p-0"
            modal-classes="modal-dialog-centered modal-sm">
        <card type="secondary" shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0">
            <template>
                <div class="text-center title">
                    <h1 class="display-4">上傳考古題</h1>
                </div>
                <hr>
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
                                required
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
                                required
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
                                required
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
                                required
                                addon-left-icon="fa fa-child"
                                >
                    </base-input>
                    <datalist id="teachers">
                        <option v-for="teacher in teachers" v-bind:key="teacher.teacher">
                            {{teacher.teacher}}
                        </option>
                    </datalist>

                    <div class="input-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
                        <input type="file"
                        id="assetsFieldHandle"
                        class="input-file"
                        @change="onFileChange"
                        ref="file"
                        accept=".pdf,.jpg,.jpeg,.png,.zip,.rar" />
                        <label for="assetsFieldHandle">
                            <div class="uploadbox">
                                Drop files or <u>Click Here</u>
                            </div>
                        </label>
                        <span class="uploaded">{{selectedFile.name}}</span>
                    </div>
                    <div class="text-center">
                        <span class="error" v-if="flag">All inputs are required</span>
                    </div>
                    <div class="text-center">
                        <base-button type="primary" class="my-4" @click="onSubmit" :disable="!this.selectedFile">Upload</base-button>
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
import UploadService from '../services/UploadService';

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
            types: ["期中考","期末考","小考","第一次期中考","第二次期中考","課本","講義"],
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
            },
            errors: [],
            flag : false,
            uploading: false,
            filelist: []
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
            this.selectedFile = this.$refs.file.files[0];
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
        },
        isValidinput(){
            var isValid = true;
            for(const key in this.form){
                if(this.form[key]===""){
                    isValid = false;
                    this.errors.push(`${this.form[key]} required`);
                }
            }
            if(this.selectedFile==='')
                isValid = false;
            return isValid;
        },
        onSubmit(){
            if(this.isValidinput()){
                this.flag = false;
                this.onUploadFile();
                this.ClearForm();    
            }
            else{
                this.flag = true;
            }
        },
        ClearForm(){
            this.selectedFile = '';
            this.form.year = '';
            this.form.type = '';
            this.form.course = '';
            this.form.teacher = '';
            this.form.grade = '';
        },
        dragover(event) {
            event.preventDefault();
            // Add some visual fluff to show the user can drop its files
            if (!event.currentTarget.classList.contains('bg-green-300')) {
                event.currentTarget.classList.remove('bg-gray-100');
                event.currentTarget.classList.add('bg-green-300');
            }
        },
        dragleave(event) {
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        },
        drop(event) {
            event.preventDefault();
            this.$refs.file.files = event.dataTransfer.files;
            this.onFileChange();
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
        }
     
    }
}
</script>

<style>
.error{
    font-size: 14px;
    color: #f5365c ;
}
.input-container {
    min-height: 150px;
    cursor: pointer;
    outline: 2px dashed #172b4d5b;
    background: #e2e2e5;
    border-radius: 10px;
    outline-offset: -8px;
    text-align: center;
}
.input-container label{
    margin-top: 25px;
    width: 100%;
}
.input-file{
    opacity: 0;
    width: 100%;
    cursor: pointer;
}
.mainupload{
    margin-right: 100px;
    width: 100%;
    margin-bottom: 0;
    cursor: pointer;
}
.mainupload :hover{
    text-decoration: underline;
}

.uploadbox{
    color: #2f2c32;
}

.uploadbox u:hover{
    cursor: pointer;
}

.uploaded{
    font-size: 14px;
    color: #8a8a8a;
}
</style>