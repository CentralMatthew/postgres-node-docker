const express = require('express');
require('dotenv').config();

const connection = require('./dataBase/PostgreSQL');
const {
  portConstants: { PORT },
} = require('./constants');
const { userRoutes } = require('./routes');

connection.getInstance().setModels();

const app = express();

app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`App listen ${PORT}`);
});
