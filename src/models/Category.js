/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-03-20 11:25:47
*------------------------------------------------------- */

import keystone from 'keystone';

const Types = keystone.Field.Types;

/**
 * Category Model
 * ==================
 */

const Category = new keystone.List('Category', {
	autokey: { from: 'name', path: 'key', unique: true },
	schema: { collection: 'Category' },
	track: true,
});

Category.add({
	name: { type: String, required: true, initial: true },
	desc: { type: Types.Textarea },
});

Category.relationship({ ref: 'Post', path: 'posts', refPath: 'categoryId' });

Category.defaultSort = '-createdAt';
Category.searchFields = 'name, desc';
Category.defaultColumns = 'name, desc, createdBy, createdAt';

Category.register();
