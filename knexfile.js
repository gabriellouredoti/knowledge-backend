module.exports = {
	client: 'pg',
	connection: {
		host : 'database',
        database: 'knowledge',
        user: 'knowledge',
        password: 'p37fgh1',
		port: '5432'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
}
