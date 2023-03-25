import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/designs';

const request = requestFactory();

export const getAllByPage = async (page) =>  {
    const take = 9;
    const skip = take * (page - 1);
    const result = await request.get(`${baseUrl}?offset=${skip}&pageSize=${take}`);

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