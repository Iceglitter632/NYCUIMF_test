import Api from "@/services/API"

export default{
    course(course){
        return Api().get("/dbRouter/getcourseexams", {params: course});
    },
    courseforeachgrade(grade){
        return Api().get("/dbRouter/getcourseforgrades/"+grade);
    },
    getallcourses(){
        return Api().get("/dbRouter/getallcourses");
    },
    getallteachers(){
        return Api().get("/dbRouter/getallteachers");
    }
}