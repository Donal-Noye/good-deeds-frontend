import axios, { CreateAxiosDefaults } from 'axios'
import {getAccessToken, removeFromStorage} from "@/services/auth/auth.helper";

export const getContentType = () => ({
	'Content-Type': 'application/json',
})

const axiosOptions: CreateAxiosDefaults = {
	baseURL: '/api',
	headers: getContentType(),
	withCredentials: true,
}

export const axiosClassic = axios.create(axiosOptions)
export const instance = axios.create(axiosOptions)

instance.interceptors.request.use(
	config => {
		const accessToken = getAccessToken()
		if (config?.headers && accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`
		}
		return config
	},
	error => Promise.reject(error)
)

instance.interceptors.response.use(
	response => response,
	error => {
		if (error.response) {
			if (error.response.status === 401) {
				removeFromStorage()
				window.location.href = '/sign-up'
			}
		}
		return Promise.reject(error)
	}
)