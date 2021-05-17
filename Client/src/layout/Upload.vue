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
                                addon-left-icon="fa fa-graduation-cap">
                    </base-input>
                    <base-input alternative
                                type="String"
                                placeholder="類別"
                                list="types"
                                addon-left-icon="fa fa-file-text-o">
                    </base-input>
                    <datalist id="types">
                        <option v-for="type in types" :value="type" v-bind:key="type"></option>
                    </datalist>
                    <base-input alternative
                                type="String"
                                placeholder="課名"
                                list="courses"
                                addon-left-icon="fa fa-book">
                    </base-input>
                    <datalist id="courses">
                        <option v-for="course in courses" v-bind:key="course" :value="course.coursename"></option>
                    </datalist>
                    <base-input alternative
                                type="String"
                                placeholder="分類"
                                list = "grades"
                                addon-left-icon="fa fa-users">
                    </base-input>
                    <datalist id="grades">
                        <option v-for="grade in grades" v-bind:key="grade" :value="grade"></option>
                    </datalist>
                    <base-input alternative
                                type="String"
                                list=teachers
                                placeholder="老師"
                                addon-left-icon="fa fa-child">
                    </base-input>
                    <datalist id="teachers">
                        <option v-for="teacher in teachers" v-bind:key="teacher" :value="teacher.teacher"></option>
                    </datalist>
                    <div @dragover="dragover" @dragleave="dragleave" @drop="drop" class="bg-gray-100 border border-gray-300 input-container">
                        <input type="file" multiple name="fields[assetFieldHandle][]" id="assetsFieldHandle" 
                        @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png,.zip,.rar"
                        class="w-px h-px opacity-0 overflow-hidden absolute input-file"/>
                        <label for="assetsFieldHandle" class="block cursor-pointer">
                            <div class="uploadbox">
                                <span>Drag file or Click to Upload</span> 
                            </div>
                        </label>
                        <span v-for="file in filelist" v-bind:key="file" class="uploaded">{{file.name}}</span>
                    </div>
                    
                    <div class="text-center">
                        <base-button type="primary" class="my-4">Upload</base-button>
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
            filelist: [],
            types: ["期中考","期末考","小考","第一次期中考","第二次期中考"],
            courses: [],
            teachers: [],
            grades: ["大一","大二","大三","大四","通識"]
        };
    },
    methods: {
        onChange(){
            this.filelist = [...this.$refs.file.files];
        },
        remove(i){
            this.filelist.splice(i, 1);
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
            this.onChange(); // Trigger the onChange event manually
            // Clean up
            event.currentTarget.classList.add('bg-gray-100');
            event.currentTarget.classList.remove('bg-green-300');
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