import axios from 'axios';

export const createUser = async (firstName, lastName, email, password, authToken) => {
    try {
        const response = await axios.post(
            `http://localhost:4000/api/users/new`,
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
