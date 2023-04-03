import { requestFactory } from "./requester";

const url = '/data/cart';

const request = requestFactory();

export const getOwnCart = async (userId) =>  {
    const result = await request.get(`${url}?where=_ownerId%3D%22${userId}%22`);
    return Object.values(result);
};

export const create = async (cartData, userId) => {
    let result = {};
    const currentCart = await getOwnCart(userId);
    const isAdded = currentCart.find(x => x.designId === cartData.designId);

    if(isAdded && isAdded.category === cartData.category) {
        cartData = {...isAdded, quantity: isAdded.quantity + cartData.quantity};
        result = await request.put(`${url}/${cartData._id}`, cartData);
    } else {
        result = await request.post(url, cartData);
    }

    return result;
};

export const remove = (cartItemId) => request.delete(`${url}/${cartItemId}`);

export const edit = async (cartItemId, quantity) => {
    const result = await request.put(`${url}/${cartItemId}`, {quantity});

    return result;
}