Blog.Post = DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),
	author: DS.attr('string'),
	date_published: DS.attr('date')
});