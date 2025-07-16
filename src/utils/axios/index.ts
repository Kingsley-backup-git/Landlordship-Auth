
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 45000
interface RefreshTokenResponse {
  accessToken: string;
  refreshToken?: string;
}
// Create a base Axios instance with the given base URL
export const baseInstance: AxiosInstance = axios.create();




// Request interceptor for the base instance
baseInstance.interceptors.request.use((config: InternalAxiosRequestConfig<unknown>) => {
    // Check if authorization token is present and add it to the request headers
    const authToken = Cookies.get('resetToken');
    if (authToken) {
        config.headers = config.headers || {}; // Initialize headers if undefined
        config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
});

// Response interceptor for the base instance
baseInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    async (error) => {
        const { response, config } = error;
        if (response) {
            // Transform error response to show error, message, and status code
            const { data, status } = response;
            const error = data?.error || 'An error occurred';
            const message = data?.message ?? 'An error occurred, please try again'
            const statusCode = status || 500;
            if (response.status === 401 && !config._retry) {
                config._retry = true;
                const refreshToken = Cookies.get('refreshToken');
                if (refreshToken) {
                    try {
                        // Call your API to refresh the token
                        const refreshResponse = await authInstance.post('/api/v1/auth/refresh-token', {
                            refreshToken: Cookies.get('refreshToken'),
                        });
                        // Update cookies with new tokens
                        setTokens(response.data.accessToken);
                        // Retry the original request with the new access token
                        config.headers['Authorization'] = `Bearer ${refreshResponse.data.accessToken}`;
                        return baseInstance(config);

                    } catch (error) {
                        // Handle refresh token failure (e.g., log out the user)
                        return Promise.reject({ error, message, statusCode });
                    }
                } else {
                    // Handle failed refresh here
                    return Promise.reject(error);
                }
            }
        }
        return Promise.reject(error);
    }
);

// Create a user-specific Axios instance
export const userInstance: AxiosInstance = axios.create();

// Request interceptor for the user instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
userInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    // Check if authorization token is present and add it to the request headers
    const authToken = Cookies.get('token');
    if (authToken) {
        config.headers = config.headers || {}; // Initialize headers if undefined
        config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
});

// Response interceptor for the user instance
userInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    async (error) => {
        const { response, config } = await error;
        
        if (response) {
            // Transform error response to show error, message, and status code
            const { data, status } = await response;
            const error = data?.error || 'An error occurred';
            const message = data?.message ?? 'An error occurred, please try again'
            const statusCode = status || 500;
            if (response.status === 401 && !config._retry) {
                config._retry = true;
               
               
                    try {
                        // Call your API to refresh the token
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const refreshResponse = await authInstance.post<RefreshTokenResponse>('/api/auth/refresh-token',{}, {
                           withCredentials : true
                        });
                        // Update cookies with new tokens
                      
                        setTokens(refreshResponse?.data?.accessToken);
                        // Retry the original request with the new access token
                        config.headers['Authorization'] = `Bearer ${refreshResponse?.data?.accessToken}`;
                        return userInstance(config);

                    } catch (error) {
                        console.log('response error:', error)
                        // Handle refresh token failure (e.g., log out the user)
                        Cookies.remove('token')
               location.replace("/auth/signin")
                     
                        return Promise.reject({ error, message, statusCode });
                    }
            
            }
            if (response.status === 403 || response.status === 401) {
                Cookies.remove('token')
                   location.replace("/auth/signin")
      

            }
            // Handle failed refresh here
            return Promise.reject({ error, message, statusCode });
        }
        console.log('response error:', error)
        return Promise.reject(error);
    }
);

// Create an authentication-specific Axios instance
export const authInstance: AxiosInstance = axios.create({ 
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true});

// Response interceptor for the auth instance
authInstance.interceptors.response.use(
    (response) => {
       return response.data;
    },
    (error) => {
        const { response } = error;
      
        if (response) {
            // Transform error response to show error, message, and status code
            const { data, status } = response;
            const error = data?.error || 'An error occurred';
            const message = data?.message ?? 'An error occurred, please try again'
            const statusCode = status || 500;
         
            return Promise.reject({ error, message, statusCode });
        }
        return Promise.reject(error);
    }
);

// Example function to set cookies when the user logs in or refreshes tokens
export function setTokens(accessToken: string) {
    // Set access token cookie with expiration
    console.log(accessToken)
    Cookies.set('token', accessToken);

}