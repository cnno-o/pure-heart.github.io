let myHeader = document.querySelector("h1");
myHeader.textContent = "Hello world!";

let myHTML = document.querySelector("h1");
myHTML.onclick = function () {
  alert("你好！");
};

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon1.png") {
    myImage.setAttribute("src", "images/firefox-icon2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon1.png");
  }
};

let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");

  if (!myName || myName === null) {
    alert("不能为空！");
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Hi, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Hi, " + storedName;
}

let myButton = document.querySelector("button");
myButton.onclick = function () {
  setUserName();
};
