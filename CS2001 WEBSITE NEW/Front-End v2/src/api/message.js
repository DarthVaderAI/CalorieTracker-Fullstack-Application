import axios from 'axios';

export function save(data) {
    return axios.post("/api/message/save",data);
}


