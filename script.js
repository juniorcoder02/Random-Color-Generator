let btn = document.querySelector("button");
let txt = document.querySelector(".color-code");
let box = document.querySelector(".box");
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `RGB(${r},${g},${b})`;
}
btn.addEventListener("click", () => {
  txt.textContent = getRandomColor();
  box.style.backgroundColor = getRandomColor();
});
