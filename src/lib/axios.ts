import axios from 'axios'

const GITHUB_API_BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL

export const api = axios.create({
  baseURL: GITHUB_API_BASE_URL,
})
