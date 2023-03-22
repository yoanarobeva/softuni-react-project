import { get, post, put, del } from "./requester";

const baseUrl = 'http://localhost:3030/data/designs';

export const getAll = async () =>  {
    const result = await get(baseUrl);

    return Object.values(result);
};

export const getOne = async (designId) => {
    const result = await get(`${baseUrl}/${designId}`);

    return result;
};

export const create = async (token, designData) => {
    const result = await post(baseUrl, token, designData);

    return result;
}

export const edit = async (designId, token, data) => put(`${baseUrl}/${designId}`, token, data);

export const deleteDesign = async (designId, token) => del(`${baseUrl}/${designId}`, token);