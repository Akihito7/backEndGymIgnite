const path = require("path");

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "containers-us-west-93.railway.app",
      user: "postgres",
      password: "1mpXA1nW3b3LoqUJrHu6",
      database: "railway",
      port: '7969'
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds")
    },
  }
};
