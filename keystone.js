/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-03-20 09:35:24
*------------------------------------------------------- */

import keystone from 'keystone';

import dotenv from 'dotenv';

dotenv.config();

keystone.init({
	'port': process.env.PORT,

	'name': process.env.NAME,
	'brand': process.env.NAME,

	'mongo': process.env.URL_DATABASE,

	'static': 'public',
	'favicon': 'public/favicon.ico',

	'admin path': 'admin',
	'compress': true,

	'auto update': true,
	'session': true,
	'cookie secret': '29d6f34bb8b8dfa9acdd6e3725a0d533c22910482530696afdbf7df90cb3c3ea9058bcc6177f2a9b32c5329dde305b34e7069d868624fd4f0e05d11768c52c19',
	'auth': true,
	'user model': 'Blogger',
	'back url': process.env.URL_WEB,

	'cloudinary config': process.env.CLOUDINARY,
	'signin logo': ['../images/logo.png'],
	'adminui custom styles': 'public/styles/theme.less',
});

keystone.import('src/models');

keystone.set('locals', {
	_: require('lodash'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('routes', require('./src/routes'));

keystone.set('nav', {
	'bloggers': 'bloggers',
	'posts': 'posts',
	'categories': 'categories',
});

keystone.start();
