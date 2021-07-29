import axios from 'axios'

// setting up backend
export default() =>{
    return axios.create({
        baseURL: `http://140.113.65.6:8081/`
    })
}