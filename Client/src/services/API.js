import axios from 'axios'

// setting up backend
export default() =>{
    return axios.create({
        baseURL: `http://140.113.67.8:8081/`
    })
}