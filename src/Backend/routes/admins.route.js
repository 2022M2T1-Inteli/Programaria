import { AdminsController } from '../controllers/index.js';
import express from 'express';

const api_admins = express.Router(); // Create express router

api_admins.post('/login', AdminsController.postLogin); // Add get jobs by filter endpoint

export default { route: 'admins', router: api_admins, api: true }; // Export router
