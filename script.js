// window.addEventListener("keyup", e => {
//   console.log(e);
//   if (e.key === "ArrowDown") {
//     document.querySelector("h1").classList.add("move-down");
//   } else if (e.key === "ArrowUp") {
//     document.querySelector("h1").classList.add("move-up");
//   }
// });

function hope() {
  const random = Math.floor(Math.random() * 10 + 1);
  document.querySelector(".card-" + random).classList.add("active");
  setTimeout(() => {
    document.querySelector(".card-" + random).classList.remove("active");
    document.querySelector(".card-" + random).style =
      "transform: translateX(-500rem)";
    setTimeout(() => {
      document.querySelector(".card-" + random).style = "opacity: 0";
    }, 1000);
  }, 2500);
  setTimeout(() => {
    document.querySelector(".card-" + random).style = "opacity: 1";
  }, 100);
  work();
}
function work() {
  setTimeout(() => {
    hope();
  }, 2050);
}
hope();
document.querySelectorAll("img").forEach(e => {
  e.addEventListener("click", () => {
    e.requestFullscreen();
  });
});
