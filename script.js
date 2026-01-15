let current = 1;

function next() {
  document.getElementById("s" + current).classList.remove("active");
  current++;
  document.getElementById("s" + current).classList.add("active");
}

function pop(el, text) {
  el.style.visibility = "hidden";
  document.getElementById("balloonText").innerText = text;
}