let myName = "";
let isFocus = false;

let jsInput;
let jsDiv;

function handleInput() {
	myName = jsInput.value;
}

function component() {
	document.activeElement === jsInput ? (isFocus = true) : (isFocus = false);

	jsInput = document.createElement("input");
	jsInput.value = myName;
	jsInput.oninput = handleInput;
	
  jsDiv = document.createElement("div");
	jsDiv.textContent = myName;

  document.body.replaceChildren(jsInput, jsDiv)

	if (isFocus) jsInput.focus();
}

setInterval(component, 15);
