const baseUrl = 'http://localhost:3030/data/loves';

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
    return result;
};

export const getOwnLoves = async (userId) => {
    const response = await fetch(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);
    const result = await response.json();

    return result;
}