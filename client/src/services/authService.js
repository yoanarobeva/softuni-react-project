const baseUrl = 'http://localhost:3030/users'

export const login = async (userData) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    });
    const data = await response.json();
    const {email, _id, accessToken} = data;
    console.log({email, _id, accessToken});

    sessionStorage.setItem('userData', JSON.stringify({email, _id, accessToken}));
};