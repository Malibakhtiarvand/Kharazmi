import Axios from 'axios'
const SERVER = 'http://localhost:9000'
Axios.defaults.headers.post['Content-Type'] = 'application/json';

export const ConnectToServer = (method, data = {}, Id = 1, url) => {
    switch (method) {
        case 'GET':
            return Axios.get(`${SERVER}/${url}`)

        case 'POST':
            return Axios.post(`${SERVER}/${url}`, data)

        case 'DELETE':
            return Axios.delete(`${SERVER}/${url}/${Id}`)

        case 'PUT':
            return Axios.put(`${SERVER}/${url}/${Id}`, data)

        default:
            return method
    }
}
