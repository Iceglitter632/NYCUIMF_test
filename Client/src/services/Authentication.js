import Api from "@/services/API";

export default{
    auth(code){
        return Api().get("auth/"+code);
    }
}