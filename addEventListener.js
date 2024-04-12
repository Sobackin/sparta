const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1) //property 목록 보기, on 붙어있으면 event listener

function handleTitleClick() {
    h1.style.color="green";
}

function handMouseEnter() {
    h1.innerText = "Mouse is here!"
}

function handMouseLeave() {
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "silver";
}

function handleWindowCopy() {
    alert("copier!")
}

function handleWindowOffline() {
    alert("SOS no WIFI")
}

function handleWindowOnline() {
    alert("Connect!")
}

h1.addEventListener("click", handleTitleClick);
// == title.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handMouseEnter);
// == title.onmouseenter = handMouseEnter;
h1.addEventListener("mouseleave", handMouseLeave);
// == title.onmouseleave = handMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);