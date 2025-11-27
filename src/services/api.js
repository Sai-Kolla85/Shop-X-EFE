import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:30083/api',
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    // small debug log to confirm token is attached to requests during development
    console.debug('[api] attaching token to request', token?.slice?.(0, 10) + '...')
  } else {
    // helpful debug message when requests are unauthenticated (dev only)
    console.debug('[api] no token in localStorage; request will be sent without Authorization header')
  }
  return config
})

// Placeholder helpers that log requests; to be replaced when backend is ready
export default api



