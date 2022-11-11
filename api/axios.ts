import axios from 'axios'
import apiConfig from './apiConfig'

const axiosClient = axios.create({
    url: apiConfig.url,
    headers: {
        Authorization: `Bearer ${apiConfig.token}`
    }
})

export const getJobsFromApi = async () => {
    const data: Job[] = await axiosClient.get(apiConfig.url)
    return data
}

axiosClient.interceptors.response.use(response => {
    if (response && response.data) {
        return response.data;
    }
    return response;

}, (error) => {
    throw error;
});

export default axiosClient;