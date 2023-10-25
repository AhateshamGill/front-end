import axios from 'axios';
const base_url = 'http://localhost:2686/api/user';



const registerUser = async (userData) => {
    const response = await axios.post(`${base_url}/register`, userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const loginUser = async(userData) => {
    const response = await axios.post(`${base_url}/login`,userData);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;
}

const logoutUser = () => {
    return localStorage.removeItem("user");
};

const authService = { registerUser, loginUser, logoutUser,}
export default authService;