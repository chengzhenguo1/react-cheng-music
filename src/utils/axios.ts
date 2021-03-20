import axios, { AxiosRequestConfig, ResponseType, AxiosInstance } from 'axios'
import { message as Message } from 'antd'
import { SERVER } from '../constants/server'

const TIMEOUT = 40000

// eslint-disable-next-line no-undef
const MIME_TYPE: IDictionary<ResponseType> = {
    JSON: 'json',
}

const createInstance = () => {
    const instance = axios.create({
        baseURL: SERVER,
        withCredentials: true,
        timeout: TIMEOUT,
        responseType: MIME_TYPE.JSON,
    })

    instance.interceptors.response.use(handleResponse, handleError)

    return instance
}

const handleResponse = (response: any) => response.data

const handleError = (error: any) => {
    const { response, message } = error
    return Promise.reject(response ? new Error(response.data.message || message) : error)
}

const toastError = (error: any) => {
    const { response, message } = error

    Message.error(response?.data?.message || message)

    return Promise.reject(error)
}

interface Instance extends AxiosInstance {
    // eslint-disable-next-line no-unused-vars
    (config: AxiosRequestConfig): Promise<any>
}

export const requestWithoutErrorToast: Instance = createInstance()

const request: Instance = createInstance()
request.interceptors.response.use(undefined, toastError)

export default request
