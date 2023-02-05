const btnConsola = document.querySelector(".btn-consolas");

btnConsola.addEventListener("click", function () {
  document.getElementById("consolas").scrollIntoView({
    behavior: "smooth",
  });
});
