import { requestFactory } from "./requester";

const url = '/data/cart';

const request = requestFactory();

export const getOwnCart = async (userId) =>  {
    const result = await request.get(`${url}?where=_ownerId%3D%22${userId}%22`);
    return Object.values(result);
};

export const create = async (cartData) => {
    const result = await request.post(url, cartData);

    console.log("Cart Submitted");

    return result;
};

export const remove = (cartItemId) => request.delete(`${url}/${cartItemId}`);

export const edit = async (cartItemId, quantity) => {
    const result = await request.put(`${url}/${cartItemId}`, {quantity});

    return result;
}