import axios from 'axios';

export const getUser = async (authToken) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/user/get-user`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                }
            }
        );
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const createUser = async (firstName, lastName, email, password, authToken) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/user/new`,
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

export const updateUser = async ({firstName, lastName, email, password, biography, _id}) => {
    try {
        const response = await axios.put(
            `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/user/${_id}`,
            { firstName, lastName, email, password, biography },
            {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken
                }
            }
        );
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getUsersFromCompany = async (authToken) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/company/members`,
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
