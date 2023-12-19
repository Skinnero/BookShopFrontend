import axios from "axios";
import {SERVER_URL} from "../constants/Url";
import {useLocalStorage} from "./UseLocalStorage";
import {JWT_TOKEN, REFRESH_TOKEN} from "../constants/LocalStorage";
import qs from "qs";

export const useApi = () => {
    const {getLocalStorage: getRefreshToken, setLocalStorage: setRefreshToken} = useLocalStorage(REFRESH_TOKEN)
    const {getLocalStorage: getJwtToken, setLocalStorage: setJwtToken} = useLocalStorage(JWT_TOKEN)

    const axiosInstance = axios.create()
    let requestQueue = []
    let isRefreshing = false

    axiosInstance.interceptors.request.use(async config => {
        config.baseURL = SERVER_URL
        config.headers.Authorization = getJwtToken()
        config.headers["Content-Type"] = "application/json"
        config.withCredentials = true

        return config
    })

    axiosInstance.interceptors.response.use(resp => {
        return resp.data
    }, async err => {
        if (err.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true
                await refreshToken()

                return new Promise((resolve, reject) => {
                    requestQueue.push({resolve, reject})
                })
            }
        } else if (isRefreshing) {
            return new Promise((resolve, reject) => {
                requestQueue.push({resolve, reject})
            })
        }

        console.error("Error on " + err.config.method + " method with url " + err.request.responseURL + ": " + err.response.data.errorMessage)
        return Promise.reject(err)
    })

    const refreshToken = async () => {
        await axios.post(SERVER_URL + "/api/v1/auths/refresh", {
            refreshToken: getRefreshToken()
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": getJwtToken()
            }
        })
            .then(resp => {
                setRefreshToken(resp.data.refreshToken)
                setJwtToken(resp.data.type + " " + resp.data.accessToken)
            })
            .catch(err => {
                console.error("Error while refreshing token: " + err)
            })

        isRefreshing = false

        requestQueue.forEach((request) => {
            request.resolve()
        })

        requestQueue.length = 0
    }

    const get = (urlEndpoint, params) => {
        return axiosInstance.get(urlEndpoint, {
            params: params, paramsSerializer: params => {
                return qs.stringify(params, {arrayFormat: "comma"})
            }
        })
    }

    const post = (urlEndpoint, payload) => {
        return axiosInstance.post(urlEndpoint, JSON.stringify(payload))
    }

    const update = (urlEndpoint, payload) => {
        return axiosInstance.put(urlEndpoint, JSON.stringify(payload))
    }

    const remove = (urlEndpoint) => {
        return axiosInstance.delete(urlEndpoint)
    }

    return {get, post, update, remove}
}