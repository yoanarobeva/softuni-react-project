const config = {
    production: {
        BASE_URL: 'https://react-practice-server-softuni.onrender.com'
    },
    development: {
        BASE_URL: 'https://react-practice-server-softuni.onrender.com'
    }
}

export default config[process.env.node_env || 'development'];