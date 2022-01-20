import axios from 'axios';

const headers = {
    "Content-Type": "application/json"
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(
            `http://localhost:4000/api/user/login`,
            { email, password },
            { headers: headers }
        );
        return response
    } catch (error) {
        console.error(error)
    }
}

export const signupUser = async (email, password, name) => {
    try {
        const response = await axios.post(
            `http://localhost:4000/api/user/signup`,
            { email, password, name },
            { headers: headers }
        );
        return response
    } catch (error) {
        console.error(error)
    }
}