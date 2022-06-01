import { DatabaseTable, DataTypes } from '../database/databaseTable.database.js';

class Candidates_graduations extends DatabaseTable {
	constructor() {
		let columns = {
			id: {
				type: DataTypes.integer,
				primaryKey: true,
				notNull: true,
				autoIncrement: true,
			},
			graduation: {
                type: DataTypes.integer,
                notNull: true,
                foreign: {
					key: 'graduation',
					table: 'GraduationNamespaces',
					column: 'id',
				},
            },
            start_date: {
                type: DataTypes.datetime,
                notNull: true,
            },
            end_date: {
                type: DataTypes.datetime,
                notNull: true,
            },
		};

		super('candidates_graduations', columns);
	}
}

export default Candidates_graduations;