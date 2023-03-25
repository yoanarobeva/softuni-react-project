const request = async (method, url, data) => {
    try {
        const user = localStorage.getItem('user');
        const auth = JSON.parse(user || '{}');

        let headers = {}

        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error.message);
        throw error;
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