let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");
let more = document.getElementById("more");
let showmore = document.getElementById("showmore");
const form = document.getElementById("form-btn");
const email = document.getElementById("client-email");
const clientName = document.getElementById("client-name");
const message = document.getElementById("client-message");
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

form.onclick = function(e){
  e.preventDefault();
  const data = {email: email.value, name: clientName.value, message: message.value}
  postData("https://formsubmit.co/ajax/8d5adb66a53b9ebdcb1b6e79488a69b3", data)
  .then((res)=> alert("Your Message has been sent"))
  .catch((err)=> alert("Error sending message, please try again"))
}

async function postData(url, data) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return "Message Sent" // parses JSON response into native JavaScript objects
}