import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/loves';

export const lovesServiceFactory = (token) => {
    const request = requestFactory(token);

    const love = async (designId) => {
        const result = await request.post(baseUrl, {designId});

        return result;
    };
    
    const getOwnLoves = async (userId) => {
        const result = await request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    
        return result;
    }
    return {
        love,
        getOwnLoves,
    };
};
