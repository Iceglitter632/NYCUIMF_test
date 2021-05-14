import Api from "@/services/API"

export default{
    course(credentials){
        return Api().get("/dbRouter", credentials)
    }
}

//call by
// CoursesServie.courselist({
//     grade: 1
//     course: "微積分"
// })