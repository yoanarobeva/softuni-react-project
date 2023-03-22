async function request(method, url, token, data) {
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
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');