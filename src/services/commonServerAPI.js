import axios from "axios";

const tmdbInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export const trackMAPI = async (httpMethod, url, reqBody,reqHeader) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    }
    return await axios(reqConfig).then((result) => {
        return result
    }).catch((err) => {
        return err
    })

}
export default tmdbInstance