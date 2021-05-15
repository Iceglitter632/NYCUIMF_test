import Api from "@/services/API"

export default{
    course(request){
        return Api().get("/dbRouter", request)
    }
}