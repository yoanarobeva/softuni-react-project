import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/users'

export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        login: (userData) => request.post(`${baseUrl}/login`, userData),
        register: (userData) => request.post(`${baseUrl}/register`, userData),
        logout: () => request.get(`${baseUrl}/logout`),
    }
};
