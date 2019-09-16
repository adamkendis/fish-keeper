
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/fish_keeper',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/development'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'pg',
    connection: 'postgresql://localhost/fish_keeper_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }

};
