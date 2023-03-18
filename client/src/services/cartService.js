const baseUrl = 'http://localhost:3030/data/cart';

export const getAll = async () =>  {
    const response = await fetch(baseUrl);
    const data = await response.json();

    return Object.values(data);
};

export const create = async (cartData) => {
    const user = JSON.parse(sessionStorage.getItem('userData'));

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": user.accessToken,
        },
        body: JSON.stringify(cartData)
    })
    const result = await response.json();

    console.log("Cart Submitted");

    return result;
};