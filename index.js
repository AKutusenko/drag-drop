const refs = {
  item: document.querySelector(".item"),
  placeholders: document.querySelectorAll(".placeholder"),
  headers: document.querySelectorAll(".header"),
};

refs.item.addEventListener("dragstart", dragstart);
refs.item.addEventListener("mousedown", mosedown);
refs.item.addEventListener("mouseup", moseup);
refs.item.addEventListener("dragend", dragend);

for (const placeholder of refs.placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function mosedown(e) {
  e.target.classList.add("hold");
}
function moseup(e) {
  e.target.classList.remove("hold");
}
function dragstart(e) {
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"), 0);
}
function dragend(e) {
  e.target.classList.remove("hold", "hide");
}
function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  const arr = e.target.parentNode.children;
  const idx = [...arr].indexOf(e.target);
  refs.headers[idx].classList.add("hovered");
}
function dragleave(e) {
  const arr = e.target.parentNode.children;
  const idx = [...arr].indexOf(e.target);
  refs.headers[idx].classList.remove("hovered");
}
function dragdrop(e) {
  e.target.append(refs.item);
  const arr = e.target.parentNode.children;
  const idx = [...arr].indexOf(e.target);
  refs.headers[idx].classList.remove("hovered");
}
