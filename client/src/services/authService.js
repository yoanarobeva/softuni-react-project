const baseUrl = 'http://localhost:3030/users'

export const register = async (userData) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    });
    const data = await response.json();
   
    return data;
};

export const login = async (userData) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    });
    const data = await response.json();
   
    return data;
};

export const logout = async (user) => {

    await fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": user.accessToken
        },
        
    });

}