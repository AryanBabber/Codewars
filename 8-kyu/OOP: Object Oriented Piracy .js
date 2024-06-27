class Ship {
	constructor(draft, crew) {
		this.draft = draft;
		this.crew = crew;
	}

	//YOUR CODE HERE...
	isWorthIt() {
		return this.draft - 1.5 * this.crew > 20;
	}
}
