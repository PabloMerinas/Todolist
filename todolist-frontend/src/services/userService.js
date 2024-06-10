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

        if(!response.data){
            return null;
        }else{
            return response.data;
        }
    } catch (error) {
        console.log('Error al acceder al usuario: ', error);
        throw new Error('Eror al acceder al usuario: ', error);
    }
}