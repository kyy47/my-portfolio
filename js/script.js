// header
window.onscroll = function () {
  const header = document.querySelector("header")
  const fixedNav = header.offsetTop
  const toTop = document.querySelector("#to-top")
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed")
    toTop.classList.remove("hidden")
    toTop.classList.add("flex")
  } else {
    header.classList.remove("navbar-fixed")
    toTop.classList.remove("flex")
    toTop.classList.add("hidden")
  }
}
// nav-menu
const navMenu = document.querySelector("#nav-menu")

// hamburger
const hamburger = document.querySelector("#hamburger")
hamburger.addEventListener("click", function () {
  this.classList.toggle("hamburger-active")
  navMenu.classList.toggle("hidden")
})

// click window for close navMenu
window.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove("hamburger-active")
    navMenu.classList.add("hidden")
  }
})

// darkmode
const darkToggle = document.getElementById("dark-toggle")
const html = document.querySelector("html")

// pindahkan tombol toggle sesuai mode bisa pake ini atau yang bawah
// if (localStorage.getItem("theme") == "dark") {
//   darkToggle.checked = "true"
// }
darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark")
    localStorage.setItem("theme", "dark")
  } else {
    html.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }
})

// pindahkan tombol toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true
} else {
  darkToggle.checked = false
}
