import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

/*
 * Jobs table model.
 * See '../database/databaseTable.database.js' for more information.
 */

class Companies extends DatabaseTable {
	constructor() {
		let columns = {
			id: {
				type: DataTypes.integer,
				primaryKey: true,
				notNull: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.text,
				notNull: true,
			},
			description: {
				type: DataTypes.text,
				notNull: true,
			},
			email: {
				type: DataTypes.text,
				notNull: true,
			},
			postal_code: {
				type: DataTypes.integer,
				notNull: true,
			},
			cnpj: {
				type: DataTypes.integer,
				notNull: true,
			},
			password: {
				type: DataTypes.text,
				notNull: true,
			},
			website: {
				type: DataTypes.text,
				notNull: true,
			},
		};

		super('companies', columns);
	}
}

export default Companies;
