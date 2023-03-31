import { requestFactory } from "./requester";

const url = '/data/designs';

const request = requestFactory();

export const getAllByPage = async (page) =>  {
    const take = 9;
    const skip = take * (page - 1);
    const result = await request.get(`${url}?offset=${skip}&pageSize=${take}`);

    return Object.values(result);
};

export const getOne = async (designId) => {
    const result = await request.get(`${url}/${designId}`);

    return result;
};

export const create = async (designData) => {
    const result = await request.post(url, designData);

    return result;
}

export const edit = (designId, data) => request.put(`${url}/${designId}`, data);

export const deleteDesign = (designId) => request.delete(`${url}/${designId}`);

export const sort = async (page, criteria, order) => {
    const take = 9;
    const skip = take * (page - 1);

    if (order === "asc") {
        order = '';
    }
    const result = await request.get(`${url}?sortBy=${criteria}%20${order}&offset=${skip}&pageSize=${take}`);

    return result;
};

export const filter = async (page, criteria, match) => {
    const take = 9;
    const skip = take * (page - 1);

    const result = await request.get(`${url}?where=${criteria}%3D%22${match}%22&offset=${skip}&pageSize=${take}`);
    return result;
};