import { requestFactory } from "./requester";

const url = '/data/loves';

const request = requestFactory();

export const love = async (designId) => {
    const result = await request.post(url, {designId});
    
    return result;
};

export const getOwnLoves = async (userId) => {
    const result = await request.get(`${url}?where=_ownerId%3D%22${userId}%22`);

    return result;
};

export const remove = (loveId) => request.delete(`${url}/${loveId}`);