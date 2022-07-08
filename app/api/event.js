import axios from 'axios';

export const createEvent = async (date, description, name, authToken) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/event/new`,
            { eventDate: date, description, name },
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

export const getEventsOfUsersCompany = async (authToken) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_HOST_API_URL}/api/event/mycompany`,
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
