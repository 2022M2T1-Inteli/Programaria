import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

/*
 * Jobs table model.
 * See '../database/databaseTable.database.js' for more information.
 */

class Admins extends DatabaseTable {
	constructor() {
		let columns = {
			id: {
				type: DataTypes.integer,
				primaryKey: true,
				notNull: true,
				autoIncrement: true,
			},
			email: {
				type: DataTypes.text,
				notNull: true,
			},
			password: {
				type: DataTypes.text,
				notNull: true,
			},
		};
		super('admins', columns);
	}
}

export default Admins;
