const checkb = document.getElementById("box");
const content = document.querySelectorAll(".accoridans-contnent");
const title = document.getElementsByClassName("accoridans-title");
const icon = document.getElementsByClassName("accoridans-icon");
const checkbox = document.querySelector("input[name=select]");



for (let i = 0; i < content.length; i++) {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked === true) {
      content[i].style.display = "block";
    } else {
      content[i].style.display = "none";
    }
  });

  title[i].addEventListener("click", () => {
    for (let j = 0; j < title.length; j++) {
      if (i === j) {
        content[i].style.display =
          content[i].style.display == "block" ? "none" : "block";

        icon[i].classList.add("active");
      } else {
        content[j].style.display = "none";
        icon[j].classList.remove("active");
      }
    }
  });
}

