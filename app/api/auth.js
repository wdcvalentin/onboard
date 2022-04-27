import axios from 'axios';

const headers = {
    "Content-Type": "application/json"
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(
            `http://localhost:4000/api/auth/login`,
            { email, password },
            { headers: headers }
        );
        return response.data
    } catch (error) {
        if (error.response) {
            console.log('error.response', error.response.data);
            return error.response.data
        }
    }
}

export const signupUser = async (email, password, firstName, lastName) => {
    try {
        const response = await axios.post(
            `http://localhost:4000/api/auth/signup`,
            { email, password, firstName, lastName },
            { headers: headers }
        );
        return response.data
    } catch (error) {
        if (error.response) {
            console.log('error.response', error.response.data);
            return error.response.data
        }
    }
}

export const logoutUser = () => {
    localStorage.removeItem('token');
}