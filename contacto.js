const formSubmit = document.querySelector("#formSubmit");
const nombre = document.querySelector("#name");
const correo = document.querySelector("#email");
const sendBtn = document.querySelector(".sendES");
const inputs = document.querySelectorAll('.contacto__intro--texto');
const labelName = document.querySelector("#labelName");
const labelEmail = document.querySelector("#labelEmail");


sendBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (!nombre.checkValidity()) {
      labelName.nextElementSibling.innerText =
      "Necesito tu nombre para comunicarme contigo";
      labelName.nextElementSibling.classList.add("error--activo");
      nombre.classList.add("invalid");
  } else {
    labelName.nextElementSibling.classList.remove("error--activo");
    nombre.classList.remove("invalid");
  }

  if (!correo.checkValidity()) {
    if (correo.validity.valueMissing) {
      labelEmail.nextElementSibling.innerText =
        "Necesito tu E-mail para comunicarme contigo";
    } else {
      labelEmail.nextElementSibling.innerText =
      "Intenta con algo parecido a example@mail.com";
    }
    labelEmail.nextElementSibling.classList.add("error--activo");
    correo.classList.add("invalid");
    correo.value = "";
  } else {
    labelEmail.nextElementSibling.classList.remove("error--activo");
    correo.classList.remove("invalid");
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