var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var buttons = document.querySelectorAll("li button");
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("delete"));
	addDeleteEvent(btn)
	ul.appendChild(li).appendChild(btn);
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	input.focus();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeOut(event) {
	event.target.classList.toggle("done");
}

function removeItem(event) {
	event.target.parentNode.remove();
}

function addDeleteEvent(btn) {
		btn.addEventListener("click", removeItem)	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikeOut);

buttons.forEach( function(btn) {
		addDeleteEvent(btn)
	}
);
