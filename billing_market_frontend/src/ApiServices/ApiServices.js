import axios from "axios"

const url ='http://localhost:8000'

export const register_employee=(emplloyeeData)=>{
    return axios.post(`${url}/v1/user/`,emplloyeeData)
}
export const login=(emplloyeeData)=>{
 return axios.post(`${url}/token/`,emplloyeeData)
}