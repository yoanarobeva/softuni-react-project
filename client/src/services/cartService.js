import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/cart';

export const cartServiceFactory = (token) => {
    const request = requestFactory(token);

    const getOwnCart = async (userId) =>  {
        const result = await request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
        
        return Object.values(result);
    };
    
    const create = async (cartData) => {
        const result = await request.post(baseUrl, cartData);
    
        console.log("Cart Submitted");
    
        return result;
    };

    return {
        getOwnCart,
        create,
    };
};