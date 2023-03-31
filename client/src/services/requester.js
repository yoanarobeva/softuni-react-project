import config from "../config/config";

const request = async (method, url, data) => {
    try {
        const user = localStorage.getItem('user');
        const auth = JSON.parse(user || '{}');
        const baseUrl = config.BASE_URL;

        let headers = {}

        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(baseUrl + url, { headers });
        } else {
            buildRequest = fetch(baseUrl + url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

        if (response.status === 204) {
            return response;
        }

        const result = await response.json();

        if (!response.ok) {
          throw new Error (result.message);
        }
        
        return result;
    } catch (error) {
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