import axios from 'axios';


const Base_URL = 'https://e-store-io.herokuapp.com//api/v1';
const TOKEN =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTM5MzE1MjJlNDFmNDI2ZTY3YTdiMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDYxMDk4OCwiZXhwIjoxNjQwODcwMTg4fQ.rs02GVcQ0AwYeEGR2Xu1WtzP1Bt0zPvb95l73_j1FIw';

export const publicRequest = axios.create({
    baseURL: Base_URL,
});

export const userRequest = axios.create({
    baseURL: Base_URL,
    headers: { token: `Bearer ${TOKEN}`},
})