const path = require('path');
const merge = require('lodash/merge');

const config = {
    all: {
        env: process.env.NODE_ENV || 'development',
        root: path.join(__dirname, '..'),
        port: 9000,
        ip: 'localhost',
        apiRoot: '/api',
        uploadDirectory: 'upload',
        mongo: {
            options: {
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: false
            }
        },
        mail: {
            auth: {
                user: 'filmapp4@gmail.com',
                pass: 'filmapp123'
            }
        }

    },
    test: {
        mongo: {
            uri: 'mongodb://localhost/filmapp-test',
            options: {
                debug: true,
            }
        },
        jwtSecret: '4rrfdutpOntGGOVYLdG6hiOQf4v7dY'
    },
    development: {
        mongo: {
            uri: 'mongodb://localhost/filmapp-dev',
            options: {
                debug: true,
            }
        },
        jwtSecret: '48mXwHcnH8qEwWgzo24y5BEIxgAU0a'
    },
    production: {
        ip: process.env.IP || undefined,
        port: process.env.PORT || 8080,
        mongo: {
            uri: '### PRODUCTION ADDRESS SERVER ###',
        },
        jwtSecret: process.env.SECRET,
        mail: {
            auth: {
                user: 'filmapp4@gmail.com',
                pass: 'filmapp123'
            }
        }
    }


};

module.exports = merge(config.all, config[config.all.env]);