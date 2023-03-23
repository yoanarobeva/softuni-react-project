const request = async (method, url, data) => {
    let token = ''
    if (!token) {
        const serializedAuth = localStorage.getItem("user");
        
        if (serializedAuth) {
            const user = JSON.parse(serializedAuth);
            token = user.accessToken;
        }
    };
    
    const options = {
        method,
        headers: {}
    };
    
    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    
    if (token) {
        options.headers['X-Authorization'] = token;
    }
    
    try {
        const response = await fetch(url, options);
        if (response.status === 204) {
            return {};
        }
        
        const result = await response.json();

        if (response.ok === false) {
            throw new Error(result.message);
        }

        return result;

    } catch (err) {
        console.log(err.message);
    }
};

export const requestFactory = () => {
    // if (!token) {
    //     const serializedAuth = localStorage.getItem("user");
        
    //     if (serializedAuth) {
    //         const user = JSON.parse(serializedAuth);
    //         token = user.accessToken;
    //     }
    // }
    return {
        get: request.bind(null, 'GET'),
        post: request.bind(null, 'POST'),
        put: request.bind(null, 'PUT'),
        delete: request.bind(null, 'DELETE'),
    }
};