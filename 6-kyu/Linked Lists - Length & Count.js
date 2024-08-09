function Node(data) {
	this.data = data;
	this.next = null;
}

function length(head) {
	// Your code goes here.
	let cnt = 0;
	while (head != null) {
		cnt++;
		head = head.next;
	}

	return cnt;
}

function count(head, data) {
	// Your code goes here.
	let idx = 0;
	while (head != null) {
		if (data == head.data) idx++;

		head = head.next;
	}

	return idx;
}
