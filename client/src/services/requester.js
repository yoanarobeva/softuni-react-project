const request = async (method, token, url, data) => {
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

        if (!response.ok) {
            throw new Error(result.message);
        }

        return result;

    } catch (err) {
        alert(err.message);
        throw err;
    }
};

export const requestFactory = (token) => {
    if (!token) {
        const serializedAuth = localStorage.getItem("user");
        
        if (serializedAuth) {
            const user = JSON.parse(serializedAuth);
            token = user.accessToken;
        }
    }
    return {
        get: request.bind(null, 'GET', token),
        post: request.bind(null, 'POST', token),
        put: request.bind(null, 'PUT', token),
        delete: request.bind(null, 'DELETE', token),
    }
};