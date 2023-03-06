const form = document.querySelector(".contacto__box");
const nombre = document.querySelector("#name");
const correo = document.querySelector("#email");
const sendBtn = document.querySelector(".sendES");
const inputs = document.querySelectorAll('.contacto__intro--texto');

form.addEventListener("submit", function(event) {
  if (!nombre.checkValidity()) {
    event.preventDefault();
    nombre.nextElementSibling.innerText =
      "I need your name to contact you";
    nombre.nextElementSibling.classList.add("error--activo");
    nombre.parentElement.classList.add("invalid");
  } else {
    nombre.nextElementSibling.classList.remove("error--activo");
    nombre.parentElement.classList.remove("invalid");
  }

  if (!correo.checkValidity()) {
    event.preventDefault();
    if (correo.validity.valueMissing) {
      correo.nextElementSibling.innerText =
        "I need your email to contact you";
    } else {
      correo.nextElementSibling.innerText =
        "Enter a valid email, for example example@mail.com";
    }
    correo.nextElementSibling.classList.add("error--activo");
    correo.parentElement.classList.add("invalid");
  } else {
    correo.nextElementSibling.classList.remove("error--activo");
    correo.parentElement.classList.remove("invalid");
  }
});

sendBtn.addEventListener("click", function(event) {
  if (!nombre.checkValidity()) {
    nombre.nextElementSibling.innerText =
      "I need your name to contact you";
    nombre.nextElementSibling.classList.add("error--activo");
    nombre.parentElement.classList.add("invalid");
  } else {
    nombre.nextElementSibling.classList.remove("error--activo");
    nombre.parentElement.classList.remove("invalid");
  }

  if (!correo.checkValidity()) {
    if (correo.validity.valueMissing) {
      correo.nextElementSibling.innerText =
        "I need your email to contact you";
    } else {
      correo.nextElementSibling.innerText =
      "Enter a valid email, for example example@mail.com";
    }
    correo.nextElementSibling.classList.add("error--activo");
    correo.parentElement.classList.add("invalid");
  } else {
    correo.nextElementSibling.classList.remove("error--activo");
    correo.parentElement.classList.remove("invalid");
  }
});


sendBtn.addEventListener('click', () => {

  if (nombre.validity.valid && correo.validity.valid) {
    inputs.forEach((input) => (input.value = ''));
    msj.value = '';
    form.reset();
    setTimeout(() => swal({
      title: "Thanks!",
      text: "I will contact you as soon as possible",
      icon: "success",
      button: "Aww <3",
    }), 500);
  }
});