import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/users'

const request = requestFactory();

export const login = (userData) => request.post(`${baseUrl}/login`, userData);
export const register = (userData) => request.post(`${baseUrl}/register`, userData);
export const logout = () => request.get(`${baseUrl}/logout`);