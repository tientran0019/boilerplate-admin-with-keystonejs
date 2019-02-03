/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-03-20 11:25:34
*------------------------------------------------------- */

import keystone from 'keystone';

const Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

const Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	schema: { collection: 'Post' },
	track: true,
});

Post.add({
	title: { type: String, required: true, initial: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	brief: { type: Types.Textarea, height: 150 },
	content: { type: Types.Html, wysiwyg: true, height: 400 },
	categoryId: { type: Types.Relationship, label: 'Category', ref: 'Category' },
	tags: { type: String },
	viewsCount: { type: Types.Number },
});

Post.defaultSort = '-createdAt';
Post.searchFields = 'title, brief, content, tags';
Post.defaultColumns = 'title, state|10%, createdBy|20%, publishedDate|10%';
Post.register();
