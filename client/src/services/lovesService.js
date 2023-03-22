import { post, get } from "./requester";

const baseUrl = 'http://localhost:3030/data/loves';

export const love = async (token, designId) => {
    const result = await post(baseUrl, token, {designId});
    
    return result;
};

export const getOwnLoves = async (userId) => {
    const result = await get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);

    return result;
};