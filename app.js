/* Created by Tivotal */

let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.classList.add("clicked");

  setTimeout(() => {
    btn.classList.add("anim1");
  }, 300);

  setTimeout(() => {
    btn.classList.add("anim2");
  }, 900);

  setTimeout(() => {
    btn.classList.add("logged-out");
    btn.querySelector(".btn-text").textContent = "Logged Out";
  }, 2500);
});
