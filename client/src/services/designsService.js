// import { get } from "./requester";
const baseUrl = 'http://localhost:3030/data/designs';

export const getAll = async () =>  {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return Object.values(data);
};

export const getOne = async (designId) => {
    const response = await fetch(`${baseUrl}/${designId}`);
    const data = await response.json();

    return data;
};

export const create = async (designData) => {
    const user = JSON.parse(sessionStorage.getItem('userData'));

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": user.accessToken,
        },
        body: JSON.stringify(designData)
    })
    const result = await response.json()
    return result;
}