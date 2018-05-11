module.exports = {
    port: process.env.PORT || 8000,
    db: process.env.DATABASE || './src/models/users.db',
    authentication: {
        jwtSecret: process.env.JWT_TOKEN || 'token'
    }
};
