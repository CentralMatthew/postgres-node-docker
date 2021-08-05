module.exports = {
    DB_PORT: process.env.DB_PORT || 5432,
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    DB_SCHEMA: process.env.DB_SCHEMA || 'users',
    DB_HOST: process.env.DB_HOST || 'host.docker.internal'
}