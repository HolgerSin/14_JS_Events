
/********  Variablen **********/

const btn = document.getElementById("trigBtn");
const body = document.body;
let status = true;


// btn.innerHTML = "DAY";

/******** Event Listener **********/


window.addEventListener("load",toggleStatus)

btn.addEventListener("click",toggleStatus);
// body.addEventListener("click",actOnBodyEvent);

function actOnBtnEvent(params) {
    ausgabe("Hi");
    toggleStatus();
}

function actOnBodyEvent() {
    ausgabe("Body");
}

/******** business logic **********/

function toggleStatus() {
    status = !status;
    updateView();
}

function updateView() {
    if (status) {
        switchClassName("night");
        switchBtnTxt("day");
    } else {
        switchClassName("day");
        switchBtnTxt("night");
    }
}



/******** view Schicht **********/


// switchClassName("night");
// switchClassName("day");
function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}

// switchBtnTxt("night");
// switchBtnTxt("day");

function switchBtnTxt(modeStr) {
    
    btn.innerHTML = modeStr;
}

/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}