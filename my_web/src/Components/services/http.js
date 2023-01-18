import Axios from 'axios'
const SERVER = 'http://localhost:9000'
Axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ConnectToServer = (method, data = {}, userId = 1) => {
    switch (method) {
        case 'GET':
            return Axios.get(`${SERVER}/Users`)

        case 'POST':
            return Axios.post(`${SERVER}/Users`, data)

        case 'DELETE':
            return Axios.delete(`${SERVER}/Users/${userId}`)

        case 'PUT':
            return Axios.put(`${SERVER}/Users/${userId}`, data)
            
        default:
            return method
    }
}
