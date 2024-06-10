import axios from "axios";
import { CONNECTION_URL } from '../App';

export const getTasks = async () => {
    try {
        const response = await axios.get(`${CONNECTION_URL}/task`)

        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('Error recuperando las tareas: ', error);
        throw new Error('Error recuperando las tareas: ', error);
    }
}