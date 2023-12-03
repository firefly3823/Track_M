import {trackMAPI} from './commonServerAPI'
import { serverURL } from './serverURL'


export const createAccount = async (user)=>{
    try {
        const response = await trackMAPI("POST", `${serverURL}/register/usr`, user, "");
        console.log('API Response:', response);
        return response;
    } catch (error) {
        console.error('Error in createAccount:', error);
        throw new Error(error.message);
    }
}

export const loginUserAPI = async (user)=>{
    return await trackMAPI("POST",`${serverURL}/login/usr`,user,"")
}