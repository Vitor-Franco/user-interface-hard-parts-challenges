let myName = "";
let jsInput;
let jsDiv;
let vDOM;
let focusedInInput;

function createVDOM() {
	return [
		[
			"input",
			myName,
			function handle() {
				myName = jsInput.value;
			},
		],
		[
			"div",
			`Hello, ${myName}!`,
			,
			[
				["div", "nested 1"],
				["div", "nested 2"],
				["div", `nested 3 - user: ${myName}`],
			],
		],
	];
}

function convert(node) {
	const [element, content, handler, children] = node;
	const el = document.createElement(element);
	el.textContent = content;
	el.value = content;
	el.oninput = handler;

	if (children && children.length > 0) {
		for (const child of children) {
			const [element, content, handler] = child;

			const childEl = document.createElement(element);
			childEl.textContent = content;
			childEl.value = content;
			childEl.oninput = handler;

			el.appendChild(childEl);
		}
	}

	return el;
}

function updateDOM() {
	focusedInInput = document.activeElement === jsInput;

	vDOM = createVDOM();
	jsInput = convert(vDOM[0]);
	jsDiv = convert(vDOM[1]);
	document.body.replaceChildren(jsInput, jsDiv);

	if (focusedInInput) jsInput.focus();
}

setInterval(updateDOM, 15);
