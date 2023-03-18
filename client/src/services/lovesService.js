const baseUrl = 'http://localhost:3030/data/loves';

export const getAllLovedUsers = async (designId) => {
    const response = await fetch(`${baseUrl}?where=designId%3D%22${designId}%22&distinct=_ownerId&count`);
    const result = await response.json();

    return result;
}

export const getAllUserLoves = async (designId) => {
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const response = await fetch (`${baseUrl}?where=designId%3D%22${designId}%22%20and%20_ownerId%3D%22${user._id}%22&count`);
    const result = await response.json();

    return result;
}

export const love = async (designId) => {
    const user = JSON.parse(sessionStorage.getItem('userData'));

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": user.accessToken,
        },
        body: JSON.stringify({ designId })
    })
    const result = await response.json()
    console.log(result);
    return result;
};