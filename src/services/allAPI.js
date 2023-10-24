import {trackMAPI} from './axiosInstance'
import { serverURL } from './serverURL'


export const CreateAccount = async (body)=>{
    return await trackMAPI("POST", `${ serverURL }/userCred`,body)
}

export const getOneAccountData = async (email)=>{
    return await trackMAPI('GET', `${serverURL}/userCred/${email}`,{})
}