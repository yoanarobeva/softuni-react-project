const config = {
    production: {
        BASE_URL: 'https://react-practice-server-softuni.onrender.com'
    },
    development: {
        BASE_URL: 'http://localhost:3030'
    }
}

export default config[process.env.node_env || 'development'];