
var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello doggies!";

// 加入一個圖片變換器
// document.querySelector("img").onclick = function () {
//     alert("Ouch! Stop poking me!");
// };
var myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/dog.jpeg") {
        myImage.setAttribute("src", "images/dog2.jpeg");
    } else if (mySrc === "images/dog2.jpeg") {
        myImage.setAttribute("src", "images/dog3.jpeg");
    } else {
        myImage.setAttribute("src", "images/dog.jpeg");
    }  
};

// 添加個客製化的歡迎訊息
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("Please enter your name:");
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Hello doggies! " + myName;
}
// if (!localStorage.getItem("name")) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem("name");
//     myHeading.innerHTML = "Hello doggies! " + storedName;
// }
myButton.onclick = function () {
    setUserName();
};

