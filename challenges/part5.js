const data = {
	myName: "",
};
let prevVDOM;
let vDOM;
let elems;

function createVDOM() {
	return [
		[
			"input",
			data.myName,
			function handle(e) {
				const value = e.target.value;
				updateData("myName", value);
			},
		],
		["div", `Hello, ${data.myName}!`],
		["div", "Great job, Jonathan!"],
		["div", "Great job, Alexa!"],
		["div", "Great job, Emilia!"],
	];
}

function updateData(label, value) {
	data[label] = value;
	requestAnimationFrame(updateDOM);
}

function updateDOM() {
	if (!elems) {
		vDOM = createVDOM();
		elems = vDOM.map(convert);
		document.body.replaceChildren(...elems);
	} else {
		prevVDOM = [...vDOM];
		vDOM = createVDOM();
		findDiff(prevVDOM, vDOM);
	}
}

function convert(node) {
	const element = document.createElement(node[0]);
	element.textContent = node[1];
	element.value = node[1];
	element.oninput = node[2];
	return element;
}

function findDiff(prevVDOM, currentVDOM) {
	for (let i = 0; i < currentVDOM.length; i++) {
		if (JSON.stringify(prevVDOM[i]) !== JSON.stringify(currentVDOM[i])) {
			elems[i].textContent = currentVDOM[i][1];
			elems[i].value = currentVDOM[i][1];
		}
	}
}

updateDOM();
