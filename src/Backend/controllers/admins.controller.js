import { admins } from '../models/index.js';

const adminsController = {
	async postLogin(req, res) {
		var admins_raw = undefined;
		admins_raw = await admins.get(req.body);
		if (admins_raw.length === 0) {
			res.status(404).send('Credenciais incorretas!');
		} else {
			console.log(admins_raw[0]);
			res.json(admins_raw[0]);
		}
	},
};

export default adminsController;
