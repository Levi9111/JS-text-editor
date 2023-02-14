{
  /* <button id="bold"><i class="fa-solid fa-bold"></i></button>
<button id="italic"><i class="fa-solid fa-italic"></i></button>
<button id="underline"><i class="fa-solid fa-underline"></i></button>
<button id="left"><i class="fa-solid fa-align-left"></i></button>
<button id="center"><i class="fa-solid fa-align-center"></i></button>
<button id="right"><i class="fa-solid fa-align-right"></i></button> */
}

const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const left = document.getElementById("left");
const center = document.getElementById("center");
const right = document.getElementById("right");

const bold2 = document.getElementById("bold2");
const italic2 = document.getElementById("italic2");
const underline2 = document.getElementById("underline2");
const left2 = document.getElementById("left2");
const center2 = document.getElementById("center2");
const right2 = document.getElementById("right2");

const textarea = document.getElementById("textarea");

bold.addEventListener("click", function () {
  textarea.style.fontWeight = "bolder";
  bold.style.display = "none";
  bold2.style.display = "block";
});
bold2.addEventListener("click", function () {
  textarea.style.fontWeight = "normal";
  bold2.style.display = "none";
  bold.style.display = "block";
});

italic.addEventListener("click", function () {
  textarea.style.fontStyle = "italic";
  italic.style.display = "none";
  italic2.style.display = "block";
});

italic2.addEventListener("click", function () {
  textarea.style.fontStyle = "normal";
  italic2.style.display = "none";
  italic.style.display = "block";
});

underline.addEventListener("click", function () {
  textarea.style.textDecoration = "underline";
  underline.style.display = "none";
  underline2.style.display = "block";
});

underline2.addEventListener("click", function () {
  textarea.style.textDecoration = "none";
  underline2.style.display = "none";
  underline.style.display = "block";
});

left.addEventListener("click", function () {
  textarea.style.textAlign = "left";
  left.style.display = "none";
  left2.style.display = "block";
  center.style.display = "block";
  center2.style.display = "none";
  right.style.display = "block";
  right2.style.display = "none";
});

left2.addEventListener("click", function () {
  textarea.style.textAlign = "inherit";
  left2.style.display = "none";
  left.style.display = "block";
});

center.addEventListener("click", function () {
  textarea.style.textAlign = "center";
  center.style.display = "none";
  center2.style.display = "block";

  left.style.display = "block";
  left2.style.display = "none";

  right.style.display = "block";
  right2.style.display = "none";
});

center2.addEventListener("click", function () {
  textarea.style.textAlign = "inherit";
  center2.style.display = "none";
  center.style.display = "block";
});

right.addEventListener("click", function () {
  textarea.style.textAlign = "right";
  right.style.display = "none";
  right2.style.display = "block";

  left.style.display = "block";
  left2.style.display = "none";

  center.style.display = "block";
  center2.style.display = "none";
});
right2.addEventListener("click", function () {
  textarea.style.textAlign = "inherit";
  right2.style.display = "none";
  right.style.display = "block";
});

const inputNum = document.getElementById("input-num");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  const inputFontSize = inputNum.value;

  textarea.style.fontSize = `${inputFontSize}px`;
  inputNum.value = "";
});

const inputColor = document.getElementById("input-color");
const colorBtn = document.getElementById("color-btn");
const colorBtn2 = document.getElementById("color-btn2");

colorBtn.addEventListener("click", function () {
  const colorHex = inputColor.value;
  textarea.style.color = colorHex;
});

colorBtn2.addEventListener("click", function () {
  const colorHex = inputColor.value;
  textarea.style.backgroundColor = colorHex;
});
