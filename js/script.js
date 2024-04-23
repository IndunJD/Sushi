import AOS from "aos"
import "aos/dist/aos.css"

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
})

window.toggleMenu = function () {
  const fullMenu = document.getElementById("full-menu").style.display = "block"
  fullMenu.classList.toggle("show-menu")
  console.log("Clicked")
}
