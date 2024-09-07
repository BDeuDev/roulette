import axios from 'axios';
import { baseUrl } from '../config/config';

export const randomNumber = async () => {

    try {
        const response = await axios.post(`${baseUrl}/random`);
        
        return response
    } catch (error) {
        console.error(error)
        throw error;

    }
};