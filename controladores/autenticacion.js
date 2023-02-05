const form = document.querySelector("[data-form]");

const emailRegEx = /^\S+@\S+\.\S+$/;

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const correo = document.querySelector("[data-correo]").value;
  const contraseña = document.querySelector("[data-contraseña]").value;

  if (correo === "") {
    alert("El campo de correo electrónico no puede estar en blanco");
  } else if (!emailRegEx.test(correo)) {
    alert("El formato de correo electrónico no es válido");
  }

  if (contraseña === "") {
    alert("El campo de contraseña no puede estar en blanco");
  }

  if (correo.length > 5 && contraseña.length > 5) {
    window.location.href = "../paginas/agregar.html";
  } else {
    alert("porfavor colocar correo y contraseña correctos");
  }
});
