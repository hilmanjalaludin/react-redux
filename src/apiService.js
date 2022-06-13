import axios from "axios";

const url = 'http://localhost:8000/'
export const auth = async (paramUrl, body) => {
    let res = await axios.post(url + paramUrl, body, { 'Content-Type': 'application/x-www-form-urlencoded' })
    console.log('cek auth', res);
    return res.data

}

export const postData = async (paramUrl, authorization, body) => {
    let res = await axios.post(url + paramUrl, body, { headers: { authorization: 'Bearer ' + authorization } })
    return res.data
}

export const getData = async (paramUrl, authorization) => {
    let res = await axios.get(url + paramUrl, { headers: { authorization: 'Bearer ' + authorization } })
    return res.data
}

export const deleteData = async (paramUrl, authorization) => {
    let res = await axios.get(url + paramUrl, { headers: { authorization: 'Bearer ' + authorization } })
    return res.data
}