// let myName = "";

// const vDOM = [
// 	[
// 		"input",
// 		myName,
// 		function handle() {
// 			myName = jsInput.value;
// 		},
// 	],
// 	["div", `Hello, ${myName}!`],
// ];

// function convert(node) {
// 	const element = document.createElement(node[0]);
// 	element.textContent = node[1];
// 	element.value = node[1];
// 	element.oninput = node[2];
// 	return element;
// }

/** Step @todo */
/* uncomment the code below this line, and comment out the code above*/

let isFocus = false;

let myName = "";
let vDOM;
let elems = [];

function HelloUser(username) {
  if (username.length < 4) {
    return ['div', 'Name is too short']
  }

	return ["div", `Hello, ${username}!`];
}

function createVDOM() {
	return [
		[
			"input",
			myName,
			function handle(e) {
				myName = e.target.value;
			},
		],
		HelloUser(myName),
		HelloUser(myName),
		HelloUser(myName),
		HelloUser(myName),
		HelloUser(myName),
		HelloUser(myName),
	];
}

function updateDOM() {
	document.activeElement === elems[0] ? (isFocus = true) : (isFocus = false);
	vDOM = createVDOM();
	elems = vDOM.map(convert);
	document.body.replaceChildren(...elems);
	if (isFocus) elems[0].focus();
}

function convert(node) {
	const element = document.createElement(node[0]);
	element.textContent = node[1];
	element.value = node[1];
	element.oninput = node[2];
	return element;
}

setInterval(updateDOM, 15);
