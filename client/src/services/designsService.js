import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/designs';

const request = requestFactory();

export const getAll = async () =>  {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (designId) => {
    const result = await request.get(`${baseUrl}/${designId}`);

    return result;
};

export const create = async (designData) => {
    const result = await request.post(baseUrl, designData);

    return result;
}

export const edit = (designId, data) => request.put(`${baseUrl}/${designId}`, data);

export const deleteDesign = (designId) => request.delete(`${baseUrl}/${designId}`);