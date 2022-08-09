import axios from 'axios';

export function save(data) {
    return axios.post("/api/friend/save", data);
}

export function del(data) {
    return axios.post("/api/friend/delete?friendId=" + data.friendId + "&username=" + data.username);
}

export function selectAll(params) {
    return axios.get("/api/friend/selectAll?username="+params)
}

export function isExitFriend(data) {
    return axios.post("/api/friend/isExitFriend?friendId=" + data.friendId + "&username=" + data.username);
}

