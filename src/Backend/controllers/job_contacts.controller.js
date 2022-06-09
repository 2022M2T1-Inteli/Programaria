import { jobContacts } from '../models/index.js';

const JobContactsController = {
	/*
	 * GET /jobcontacts
	 * Returns all jobContactss
	 */
	get(req, res) {
		// Get all jobContacts
		jobContacts.get({}).then((result) => {
			// Get all jobContacts
			res.send(result); // Send all jobContacts
		});
	},

	/*
	 * GET /jobContacts
	 * Get specific jobContacts by id
	 */
	getOne(req, res) {
		jobContacts.get({ id: req.params.id }).then((result) => {
			// Get jobContacts by id
			res.send(result); // Send jobContacts with id = req.params.id
		});
	},

	/*
	 * POST /jobContacts
	 * Create new jobContacts
	 */
	post(req, res) {
		jobContacts.save(req.body).then((result) => {
			// Save jobContacts
			res.send(result); // Send result
		});
	},

	/*
	 * PUT /jobContacts
	 * Update jobContacts
	 */
	put(req, res) {
		jobContacts.update(req.body, { id: req.params.id }).then((result) => {
			// Update jobContacts with id = req.params.id
			res.send(result); // Send result
		});
	},

	/*
	 * DELETE /jobContacts
	 * Delete a jobContacts
	 */
	delete(req, res) {
		jobContacts.delete({ id: req.params.id }).then((result) => {
			// Delete jobContact with id = req.params.id
			res.send(result); // Send result
		});
	},
};

export default JobContactsController;
