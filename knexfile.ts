import knex from "knex";

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const config:any  = knex({
  
    client: "pg",
    connection:
      "postgresql://postgres:Around22!@localhost:5432/thread?schema=public",
    migrations: {
      directory: "src/migrations",
    
  },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },
});

export = config
