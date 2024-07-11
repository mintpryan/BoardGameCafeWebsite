import axios from "axios";

const axiosService = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});


axiosService.interceptors.response.use(
    (res) => Promise.resolve(res),
    (err) => Promise.reject(err)
);


export function fetcher(url) {
    return axiosService.get(url);
}

export default axiosService;