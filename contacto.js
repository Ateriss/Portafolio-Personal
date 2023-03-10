const formSubmit = document.querySelector("#formSubmit");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const sendBtn = document.querySelector(".sendES");
const inputs = document.querySelectorAll('.contacto__intro--texto');

sendBtn.addEventListener("click", function(event) {
  event.preventDefault();
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


  sendBtn.addEventListener("click", ()=>  {
  if (nombre.validity.valid && correo.validity.valid) {
    const formData = new FormData(formSubmit);
    fetch("https://formsubmit.co/ajax/alexandralinares2729@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json",  'Accept': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      inputs.forEach((input) => (input.value = ""));
      msj.value = "";
      formSubmit.reset();
      setTimeout(
        () =>
          swal({
            title: "¡Gracias!",
            text: "Me contactaré contigo lo antes posible",
            icon: "success",
            button: "Aww <3",
          }),
        500
      )
      
    
      .then(response =>  response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
        
        }})