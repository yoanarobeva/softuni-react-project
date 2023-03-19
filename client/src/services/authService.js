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

    sessionStorage.setItem('userData', JSON.stringify(data));
    
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

    sessionStorage.removeItem('userData');
}