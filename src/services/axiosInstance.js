import axios from "axios";

const tmdbAxiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export const trackMAPI = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        Headers: {
            "Content-type": "application/json"
        }
    }
    return await axios(reqConfig).then((result) => {
        return result
    }).catch((err) => {
        return err
    })

}
export default tmdbAxiosInstance