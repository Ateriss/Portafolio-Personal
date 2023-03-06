const form = document.querySelector(".contacto__box");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const sendBtn = document.querySelector(".sendES");
const inputs = document.querySelectorAll('.contacto__intro--texto');

form.addEventListener("submit", function(event) {
  if (!nombre.checkValidity()) {
    event.preventDefault();
    nombre.nextElementSibling.innerText =
      "Necesito tu nombre para comunicarme contigo";
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
        "Necesito tu E-mail para comunicarme contigo";
    } else {
      correo.nextElementSibling.innerText =
        "Ingresa un correo válido, como example@mail.com";
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
      "Necesito tu nombre para comunicarme contigo";
    nombre.nextElementSibling.classList.add("error--activo");
    nombre.parentElement.classList.add("invalid");
  } else {
    nombre.nextElementSibling.classList.remove("error--activo");
    nombre.parentElement.classList.remove("invalid");
  }

  if (!correo.checkValidity()) {
    if (correo.validity.valueMissing) {
      correo.nextElementSibling.innerText =
        "Necesito tu E-mail para comunicarme contigo";
    } else {
      correo.nextElementSibling.innerText =
      "Intenta con algo parecido a example@mail.com";
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
      title: "¡Gracias!",
      text: "Me contactaré contigo lo antes posible",
      icon: "success",
      button: "Aww <3",
    }), 500);
  }
});