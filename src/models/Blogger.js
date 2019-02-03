/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-03-20 11:25:26
*------------------------------------------------------- */

import keystone from 'keystone';

const Types = keystone.Field.Types;

/**
 * Blogger Model
 * ==========
 */
const Blogger = new keystone.List('Blogger', {
	schema: { collection: 'Blogger' },
	map: { name: 'fullName' },
	noedit: true,
	nocreate: true,
	nodelete: true,
	// hidden: true,
});

Blogger.add({
	fullName: { type: String, required: true, initial: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true, hidden: true },
	createdAt: { type: Types.Date, index: true, noedit: true, default: new Date() },
}, 'Permissions', {
	active: { type: Boolean, label: 'Can access Alfazi Blog', index: true },
});

// Provide access to Keystone
Blogger.schema.virtual('canAccessKeystone').get(function () {
	return this.active;
});


/**
 * Registration
 */
Blogger.defaultSort = '-createdAt';
Blogger.searchFields = 'fullName, email';
Blogger.defaultColumns = 'fullName, email, active, createdAt';
Blogger.register();
