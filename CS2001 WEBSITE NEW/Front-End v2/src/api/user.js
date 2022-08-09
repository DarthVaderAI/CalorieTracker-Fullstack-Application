import axios from 'axios';

export function register(data) {
    return axios.post("/api/user/register",data);
}



export function login(data) {
    return axios.post("/api/user/login",data);
}


export function search(params) {
    return axios.get("/api/user/search?name="+params)

}

