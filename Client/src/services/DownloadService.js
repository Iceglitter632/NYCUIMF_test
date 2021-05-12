import Api from "@/services/API"
import axios from 'axios'

export default{
    download(course){
        // const url =  Api().get("download", path)
        const url = "http://localhost:8081/"+course+".pdf"
        console.log(url)
        const name = course+".pdf"
        axios({
            url: url,
            method: 'GET',
            responseType: 'blob',
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', name);
            document.body.appendChild(link);
            link.click();
          });
    }
}

// axios({
//     url: 'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg', //your url
//     method: 'GET',
//     responseType: 'blob', // important
//   }).then((response) => {
//     const url = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'file.jpg'); //or any other extension
//     document.body.appendChild(link);
//     link.click();
//   });
