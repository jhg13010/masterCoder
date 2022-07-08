//grab html elements 
var body = document.querySelector(".body");
var headerEl = document.querySelector("header");

//create standard html elements 
var timerEl = document.createElement("h3");
timerEl.className = "timer";
headerEl.appendChild(timerEl);

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

// create timer 
var timeLeft = 5;
timerEl.innerHTML = "Time Left: " + timeLeft;

//create timer function
function questionTimer () {
    //clear timer and alert if not answered in time
    if (timeLeft <= 0) {
        alert("I'm sorry, you have failed to answer the question in the given time");
        clearInterval(questionTimer);
    }
    timeLeft = timeLeft - 1 
    timerEl.innerHTML = "Time Left: " + timeLeft;
};


//create test function
function testHandler() {
    startContainerEl.removeChild(hookLineEl);
    startContainerEl.removeChild(button);

    //start timer
    setInterval(questionTimer, 1000);

    pageTitleEl.textContent = "Question 1:";

    var answer1El = document.createElement("button");
    answer1El.textContent = "answer 1";
    answer1El.className = "btn"
    startContainerEl.appendChild(answer1El);
};

//startup function to show homepage 
function onStart () { 
    startContainerEl.appendChild(pageTitleEl);
    startContainerEl.appendChild(hookLineEl);
    startContainerEl.appendChild(button);
    button.addEventListener("click", testHandler);

}

window.onload = onStart;



/*var answer2El = document.createElement("button");
answer2El.textContent = "answer 2";
answer2El.className = "btn"
startContainerEl.appendChild(answer2El);

var answer3El = document.createElement("button");
answer3El.textContent = "answer 3";
answer3El.className = "btn"
startContainerEl.appendChild(answer3El); */





