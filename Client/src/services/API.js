import axios from 'axios'

// setting up backend
export default() =>{
    return axios.create({
        baseURL: `http://localhost:8081/`
    })
}