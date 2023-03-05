
const inputs = document.querySelectorAll("input");
const errorMsj = document.getElementsByClassName("contacto__intro--error");

function valida(input){
    const tipoInput = input.dataset.tipo;
if(input.validity.valid){
    input.parentElement.classList.remove("invalid");
    document.errorMsj.innerHTML = "";
}
else{
    input.parentElement.classList.add("invalid");
    document.errorMsj.innerHTML = msjError;
}
}


inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

const tipoError = [
    "valueMissing",
    "typeMismatch"
]

const msjError={
    nombre: {
        valueMissing: "Por favor escribe tu nombre aquí"
    },

    correo: {
        valueMissing: "Necesito su email para comunicarme contigo",
        typeMismatch: "Este correo no es válido",
    },

}

function mostrarMensajeDeError(tipoInput, input) {
    let mensaje = "";
    tipoError.forEach((i) => {
      if (input.validity[i]) {
        mensaje = msjError[tipoInput][i];
      }
    });
    return mensaje;
  }