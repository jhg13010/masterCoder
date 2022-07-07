var button = document.querySelector(".btn");
var timer = document.querySelector(".timer")
var body = document.querySelector(".body")

timer = 60;

function testHandler() {
    console.log("clicked")
}

function onStart () {
    var startContainerEl = document.createElement("div");
    body.appendChild(startContainerEl);

    var pageTitleEl = document.createElement("h1");
    pageTitleEl.textContent = "Master Coding Challenge";
    pageTitleEl.className = "page-title"
    startContainerEl.appendChild(pageTitleEl);

    var hookEl = document.createElement("p");
    hookEl.textContent = "Click start below if you have what it takes to be a Master Coder!";
    hookEl.className = "hook";
    startContainerEl.appendChild(hookEl);

    var button = document.createElement("button");
    button.textContent = "Start";
    button.className = "btn"
    button.id = "start"
    startContainerEl.appendChild(button);

    button.addEventListener("click", testHandler)

}

window.onload = onStart;






