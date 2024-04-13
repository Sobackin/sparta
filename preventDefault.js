
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(what) {
  what.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(what){
  what.preventDefault(); // 기본동작을 막아버림 
  alert("clicked!") // 링크가 뜨는 상황을 막음!
  console.dir(what);
}


loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick)
// 클릭을 하면 함수의 내용이 실행됨