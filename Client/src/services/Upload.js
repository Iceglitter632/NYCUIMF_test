import Api from "@/services/API"

export default{
    upload(form){
        return Api().post("/upload", form);
    }
}