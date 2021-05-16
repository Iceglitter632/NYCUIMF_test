import Api from "@/services/API"

export default{
    course(course){
        // let course = request.params.course;
        console.log("from api");
        console.log(course);
        return Api().get("/dbRouter", {params: course});
        // return Api().get("/dbRouter/"+course);
    }
}