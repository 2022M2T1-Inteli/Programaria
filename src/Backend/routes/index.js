import JobsRoute from './jobs.route.js';
import CandidatesRoute from './candidates.route.js';
import CompaniesRoute from './companies.route.js';
import SoftskillsRoute from './softskills.route.js';
import HardskillsRoute from './hardskills.route.js';
import BonusRoute from './bonus.route.js';
import JobContactsRoute from './jobs_contacts.route.js';
import MatchRoute from './match.route.js';
import AdminRoute from './admins.route.js';

/*
 * Static routes controller for the application.
 */
class RouteManager {
	// Routes manager class
	static routes = []; // Routes list

	/*
	 * Add route to routes lists
	 * @param {object} route - Route object
	 */
	static addRoute(route) {
		RouteManager.routes.push(route); // Add route to routes list
	}

	/*
	 * Instance routes
	 * @param {object} app - Express app
	 */
	static instanceRoutes(app) {
		RouteManager.routes.forEach((route) => {
			// For each route
			app.use(`${route.api ? '/api' : ''}/${route.route}`, route.router); // Add route to app
		});
	}
}

RouteManager.addRoute(JobsRoute); // Add Jobs route to routes manager
RouteManager.addRoute(CandidatesRoute); // Add Candidates route to routes manager
RouteManager.addRoute(CompaniesRoute); // Add Companies route to routes manager
RouteManager.addRoute(SoftskillsRoute); // Add Softskills route to routes manager
RouteManager.addRoute(HardskillsRoute); // Add Hardskills route to routes manager
RouteManager.addRoute(BonusRoute); // Add Hardskills route to routes manager
RouteManager.addRoute(JobContactsRoute); // Add JobContacts route to routes manager
RouteManager.addRoute(MatchRoute); // Add Match route to routes manager
RouteManager.addRoute(AdminRoute); // Add Match route to routes manager

export default RouteManager;
