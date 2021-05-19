import Api from "@/services/API"
import axios from 'axios'
const path = require("path")

export default{
    download(id){
        // const url =  Api().get("download", path)
        Api().get("dbRouter/download/"+id).then((response1)=>{
          const filename = response1.data[0].filename;
          const ext = path.extname(filename);
          console.log(filename);
          const url = "http://localhost:8081/"+id+ext;
          axios({
            url: url,
            method: "GET",
            responseType: "blob"
          }).then((response2)=>{
            const url2 = window.URL.createObjectURL(new Blob([response2.data]));
            const link = document.createElement('a');
            link.href = url2;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
          })
        })
        
    }
}