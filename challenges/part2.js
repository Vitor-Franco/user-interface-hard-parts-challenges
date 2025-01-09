let post = "";
const posts = [];

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");
const jsButton = document.querySelector("button");

function handleInput() {
	post = jsInput.value;
}

function addPost() {
	posts.push(post);
	post = "";
}

function dataToView() {
	jsInput.value = post;

	const postsElem = posts.map((post) => {
		const newPost = document.createElement("div");
		newPost.textContent = post;
		return newPost;
	});
	jsDiv.replaceChildren(...postsElem);
}

setInterval(dataToView, 15);

jsInput.oninput = handleInput;
jsButton.onclick = addPost;
