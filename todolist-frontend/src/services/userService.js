import axios from 'axios';
import { CONNECTION_URL } from '../App';


export const checkUserExists = async (username, password) => {
    try {
        const response = await axios.get(`${CONNECTION_URL}/user/userExists`, {
            params: {
                username: username,
                password: password
            }
        })

        if (!response.data) {
            return null;
        } else {
            return response.data;
        }
    } catch (error) {
        console.log('Error al acceder al usuario: ', error);
        throw new Error('Error al acceder al usuario: ', error);
    }
}

export const registerUser = async (user) => {
    try {
        const response = await axios.post(`${CONNECTION_URL}/user/registerUser`, user);

        // console.log(response.data);
        return response.data;

    } catch (error) {
        if (error.response.data) {
            return error.response.data;
        } else {
            console.log('Error al registrar el usuario', error);
            throw new Error('Error al registrar el usuario', error)
        }

    }
}