// const API = `https://pastexams-backend.azurewebsites.net/`;
// const API = "http://localhost:8081/";
const API = `https://pastexam.yagami.dev/api`

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

export default {
    API,
    getCookie,
}