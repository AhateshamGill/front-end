import axios from 'axios';
const base_url = 'http://localhost:2686/api/sham';

const addSham = async(sham,token) => {
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    };
    const response = await axios.post(base_url,sham,config);
    return response.data;
}

const postSham = async(sham,token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(`${base_url}`,sham,config);
    return response.data;
}

const getSham= async(token) => {
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${base_url}`,config)
    return response.data;
}

const shamService = {
    addSham,
    postSham,
    getSham,
}

export default shamService;