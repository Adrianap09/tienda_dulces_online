// En db.js
import { Sequelize } from 'sequelize';

const db = new Sequelize('tienda', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
});

export default db;
