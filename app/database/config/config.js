module.exports = {
  development: {
    username: process.env.DB_DEVELOP_USERNAME,
    password: process.env.DB_DEVELOP_PASSWORD,
    database: process.env.DB_DEVELOP_NAME,
    host: process.env.DB_DEVELOP_HOST,
    port: process.env.DB_DEVELOP_PORT,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_TEST_HOST,
    port: process.env.DB_TEST_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
  production: {
    username: process.env.DB_PRODUCTION_USERNAME,
    password: process.env.DB_PRODUCTION_PASSWORD,
    database: process.env.DB_PRODUCTION_NAME,
    host: process.env.DB_PRODUCTION_HOST,
    port: process.env.DB_PRODUCTION_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
}
