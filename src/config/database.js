const { define } = require('core-js/core/object');

require('dotenv').config();

module.exports = {
  dialect: 'mysql', /*https://www.npmjs.com/package/mysql#connection-options*/
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE.PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at',
  },
//  dialectOptions: {
//    timezone: 'SYSTEM',
//  },
//  timezone: 'SYSTEM',
};
