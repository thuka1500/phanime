Activity = new Meteor.Collection('activity');

// Types of activity

Activity.libraryEntryFields = function(type, contentId, whatChanged, newValue) {
	// Content ID can either be animeId or mangaId (no manga for now)
	var libraryEntry = {
		type: type, // can either be anime or manga
		contentId: contentId, // will depend on the type
		whatChanged: whatChanged,
		newValue: newValue
	};

	return libraryEntry;

};