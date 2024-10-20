// const func1 = document.querySelector(".func1"),
// func2 = document.querySelector(".func2");
// box1 = func1.querySelector(".abox1"),
// box2 = func2.querySelector(".abox2");
// var h1 = box1.querySelector("header"),
// h2 = box2.querySelector("header"),
// // a1 = box1.querySelector("a"),
// // a2 = box2.querySelector("a"),
// txt1 = document.getElementById("func1txt1"),
// txt2 = document.getElementById("func1txt2"),
// txt3 = document.getElementById("func1txt3"),
// txt4 = document.getElementById("func2txt1"),
// txt5 = document.getElementById("func2txt2"),
var btn1 = document.getElementById("tabBtn1"),
btn2 = document.getElementById("tabBtn2");

// txt1.style.display = "none";
// txt2.style.display = "none";
// txt3.style.display = "none";
// txt4.style.display = "none";
// txt5.style.display = "none";

// func1.addEventListener("mouseover", () => {
//     // this.style.cursor = 'pointer';
//     func1.classList.add("active");
//     h1.innerText = "";
//     // a1.innerText = "输入待处理的视频以及标识身份的字符串获得添加水印的视频";
//     txt1.style.display = "block";
//     txt2.style.display = "block";
//     txt3.style.display = "block";
//     txt1.innerText = "输入待处理的视频";
//     txt2.innerText = "以及标识身份的字符串";
//     txt3.innerText = "获得添加水印的视频";
// });

// func1.onmouseover = function()
// {
//     this.style.cursor = 'pointer';
// }

// func1.addEventListener("mouseout", () => {
//     func1.classList.remove("active");
//     h1.innerText = "功能一";
//     // a1.innerText = "";
//     txt1.style.display = "none";
//     txt2.style.display = "none";
//     txt3.style.display = "none";
// });

// func1.addEventListener("click", () => {
//     window.location.href='./upload/';
// });

// func2.addEventListener("mouseover", () => {
//     // this.style.cursor = 'pointer';
//     func2.classList.add("active");
//     h2.innerText = "";
//     // a2.innerText = "分别输入处理前后的视频来获得标识身份的字符串";
//     txt4.style.display = "block";
//     txt5.style.display = "block";
//     txt4.innerText = "分别输入处理前后的视频";
//     txt5.innerText = "来获得标识身份的字符串";
// });

// func2.onmouseover = function()
// {
//     this.style.cursor = 'pointer';
// }

// func2.addEventListener("mouseout", () => {
//     func2.classList.remove("active");
//     h2.innerText = "功能二";
//     // a2.innerText = "";
//     txt4.style.display = "none";
//     txt5.style.display = "none";
// });

// func2.addEventListener("click", () => {
//     window.location.href='./extractString/';
// });

btn1.onclick = ()=>{
    window.location.href='./upload/';
}

btn2.onclick = ()=>{
    window.location.href='./extractString/';
}
