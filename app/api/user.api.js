import axios from 'axios';

export const createUser = async (firstName, lastName, email, password, authToken) => {
    try {
        const response = await axios.post(
            `http://localhost:4000/api/user/new`,
            { firstName, lastName, email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                }
            }
        );
        return response
    } catch (error) {
        console.error(error)
    }
}

export const getUsersFromCompany = async (authToken) => {
    try {
        const response = await axios.get(
            `http://localhost:4000/api/company/members`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                }
            }
        );
        return response
    } catch (error) {
        console.error(error)
    }
}
