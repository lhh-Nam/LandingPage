/* Respondsive NAVBAR */

const hamburger_checkbox = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

hamburger_checkbox.addEventListener("change", function () {
  navbar.classList.toggle("active");
});

/* Highlight Navbar LINK */

const navbar_items = document.getElementsByClassName("navbar__link");
const sections = document.getElementsByClassName("section");

document.addEventListener("scroll", menuColorChanger);

function menuColorChanger() {
  for (let section of sections) {
    let sb = section.getBoundingClientRect();

    for (let item of navbar_items) {
      let ib = item.getBoundingClientRect();

      if (ib.y >= sb.y && ib.y + ib.height <= sb.y + sb.height) {
        let color = section.dataset.color;

        switch (color) {
          case "light":
            item.classList.add("light");
            break;

          case "dark":
            item.classList.remove("light");
            break;
        }
      }
    }
  }
}
