import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/designs';

export const designsServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () =>  {
        const result = await request.get(baseUrl);

        return Object.values(result);
    };

    const getOne = async (designId) => {
        const result = await request.get(`${baseUrl}/${designId}`);

        return result;
    };

    const create = async (designData) => {
        const result = await request.post(baseUrl, designData);

        return result;
    }

    const edit = async (designId, data) => request.put(`${baseUrl}/${designId}`, data);

    const deleteDesign = async (designId) => request.delete(`${baseUrl}/${designId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteDesign,
    };
}