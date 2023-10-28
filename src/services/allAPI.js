import {trackMAPI} from './axiosInstance'
import { serverURL } from './serverURL'


export const CreateAccount = async (body)=>{
    return await trackMAPI("POST", `${ serverURL }/userCred`,body)
}

export const getAccountData = async ()=>{
    return await trackMAPI('GET', `${serverURL}/userCred`,"")
}