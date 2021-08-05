const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');

const {dbConstants: {DB_PORT, DB_HOST, DB_PASSWORD, DB_SCHEMA, DB_USER}} = require('../../constants')

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize(DB_SCHEMA,
            DB_USER,
            DB_PASSWORD,
            {
                host: DB_HOST,
                port: DB_PORT,
                dialect: 'postgres'
            });

        const models = {};
        const modelsDirectory = path.join(process.cwd(), 'dataBase', 'PostgreSQL', 'models');

        const readAndSetModels = () => {
            fs.readdir(modelsDirectory, (err, files) => {
                files.forEach((file) => {
                    const [modelName] = file.split('.');
                    // eslint-disable-next-line import/no-dynamic-require
                    const modelFile = require(path.join(modelsDirectory, file));
                    models[modelName] = modelFile(client);
                });
            });
        };
        return {
            getModel: (modelName) => models[modelName],
            setModels: () => readAndSetModels(),
            transactionInstance: () => client.transaction()
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    };
})();
