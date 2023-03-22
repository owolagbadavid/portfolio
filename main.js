let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
let more = document.getElementById("more");
let showmore = document.getElementById("showmore");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
const progress = document.querySelectorAll(".progress h3 span");
const progressBar = document.querySelectorAll(".progress div span");
let i = 0;
for (let span of progress) {
  progressBar[i++].style.width = `${span.textContent}`;

  console.log(span.textContent);
}
showmore.addEventListener("click", () => {
  if (more.style.display == "none") {
    more.style.display = "block";
    showmore.innerText = "Show less";
  } else {
    more.style.display = "none";
    showmore.innerText = "Show more";
  }
});
