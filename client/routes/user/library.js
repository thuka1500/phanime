UserLibraryController = RouteController.extend({

	onAfterAction: function () {
		if (this.ready()) {
			var user = this.data();

			SEO.set({
				title: user.username + "'s Library" + " " + siteSettings.separator + " " + siteSettings.title,
				meta: {
					'description' : user.about
				},
				og: {
					'title' : user.username + "'s Library" + " " + siteSettings.separator + " " + siteSettings.title,
					'description' : user.about,
					'type' : 'profile',
					'image' : user.avatarImageUrl(),
				}
			});
		}
	},

	waitOn: function () {
		return Meteor.subscribe('userWithLibraryEntries', this.params.username);
	},

	data: function () {
		var user = Meteor.users.findOne({username: this.params.username});
		
		if (this.ready()) {
			
			user.libraryEntries = LibraryEntries.find({userId: user._id}).fetch();

			user.libraryEntries.forEach(function(libraryEntry) {
				libraryEntry.anime = Anime.findOne({_id: libraryEntry.animeId});
			});

		}

		return user;
	}

});