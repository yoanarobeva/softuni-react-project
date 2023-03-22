import { get, post } from "./requester";

const baseUrl = 'http://localhost:3030/data/cart';

export const getOwnCart = async (userId) =>  {
    const result = await get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    
    return Object.values(result);
};

export const create = async (token, cartData) => {
    const result = await post(baseUrl, token, cartData);

    console.log("Cart Submitted");

    return result;
};