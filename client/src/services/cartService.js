import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/cart';

const request = requestFactory();

export const getOwnCart = async (userId) =>  {
    const result = await request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    return Object.values(result);
};

export const create = async (cartData) => {
    const result = await request.post(baseUrl, cartData);

    console.log("Cart Submitted");

    return result;
};

export const remove = (cartItemId) => request.delete(`${baseUrl}/${cartItemId}`);

export const edit = async (cartItemId, quantity) => {
    const result = await request.put(`${baseUrl}/${cartItemId}`, {quantity});

    return result;
}