module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '[db_username]',
      password : '[db_password]',
      database : '[db_name]',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '[db_username]',
      password : '[db_password]',
      database : '[db_name]',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '[db_username]',
      password : '[db_password]',
      database : '[db_name]',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
