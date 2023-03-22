import { get, post } from "./requester";

const baseUrl = 'http://localhost:3030/users'

export const login = (token, userData) => post(`${baseUrl}/login`, token, userData);
export const register = (token, userData) => post(`${baseUrl}/register`, token, userData);
export const logout = (token) => get(`${baseUrl}/logout`, token);