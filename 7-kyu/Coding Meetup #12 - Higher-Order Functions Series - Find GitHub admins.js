function findAdmin(list, lang) {
	// thank you for checking out the Coding Meetup kata :)
	return list.filter(
		(v) => v.githubAdmin.toLowerCase() == "yes" && v.language == lang
	);
}
