var timer = document.querySelector(".timer")
var body = document.querySelector(".body")
var startContainerEl = document.createElement("div");
body.appendChild(startContainerEl);

var pageTitleEl = document.createElement("h1");
pageTitleEl.textContent = "Master Coding Challenge";
pageTitleEl.className = "page-title"

var hookLineEl = document.createElement("p");
hookLineEl.textContent = "Click start below if you have what it takes to be a Master Coder!";
hookLineEl.className = "hook";

var button = document.createElement("button");
button.textContent = "Start";
button.className = "btn"
button.id = "start"

timer = 60;

function testHandler() {
    startContainerEl.removeChild(hookLineEl);
    startContainerEl.removeChild(button);

    pageTitleEl.textContent = "Question 1:";

    var answer1El = document.createElement("button");
    answer1El.textContent = "answer 1";
    answer1El.className = "btn"
    startContainerEl.appendChild(answer1El);

    var answer2El = document.createElement("button");
    answer2El.textContent = "answer 2";
    answer2El.className = "btn"
    startContainerEl.appendChild(answer2El);

    var answer3El = document.createElement("button");
    answer3El.textContent = "answer 3";
    answer3El.className = "btn"
    startContainerEl.appendChild(answer3El);
}

function onStart () { 
    startContainerEl.appendChild(pageTitleEl);
    startContainerEl.appendChild(hookLineEl);
    startContainerEl.appendChild(button);
    button.addEventListener("click", testHandler)

}

window.onload = onStart;






