/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-03-20 11:21:16
*------------------------------------------------------- */

import keystone from 'keystone';
import { requireUser, flashMessages } from './middleware';

const importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', requireUser);
keystone.pre('render', flashMessages);

// Import Route Controllers
const routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) { // eslint-disable-line
	// Views
	app.get('/', routes.views.index);

};
