PeopleController = RouteController.extend({
	
	onBeforeAction: function () {
		SEO.set({
			title: "People" + " " + siteSettings.separator + " " + siteSettings.title,
			meta: {
				'description' : 'Explore the people related to anime shows on phanime'
			}
		});
	},

	waitOn: function () {
		return Meteor.subscribe('people');
	},

	data: function () {
		return People.find({}, {sort: {createdAt: -1}});
	}

});