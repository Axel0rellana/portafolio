/*** Contact-Form ***/
export const contactForm = () => {
  const form = document.getElementById("contact-form");
  const formButton = document.getElementById("form-button");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");
  const nameError = document.getElementById("name-error");
  const firstCharError = document.getElementById("first-char-error");
  const emailError = document.getElementById("email-error");
  const modal = document.getElementById("gracias");

  // Expresiones regulares
  const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü][A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]*$/;
  const firstCharRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]/;
  const emailRegex =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

  // Validación del estado de los campos
  const checkFormValidity = () => {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = message.value.trim();

    const isNameValid = nameRegex.test(nameValue);
    const isEmailValid = emailRegex.test(emailValue);
    const isMessageValid = messageValue !== "";

    // Habilitar el boton Enviar del formulario
    if (isNameValid && isEmailValid && isMessageValid) {
      formButton.classList.add("active");
    } else {
      formButton.classList.remove("active");
    }
  };

  // Función debounce
  const debounce = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  // Función para agregar o quitar la clase active en el contenedor del campo
  const toggleActiveClass = (inputElement, isActive) => {
    if (isActive) {
      inputElement.classList.add("active");
    } else {
      inputElement.classList.remove("active");
    }
  };

  // Validación genérica
  const validateInput = (input, regex, errorElement) => {
    const value = input.value.trim();
    if (value === "") {
      errorElement.classList.remove("active");
      toggleActiveClass(input.parentElement, false);
    } else if (!regex.test(value)) {
      errorElement.classList.add("active");
      toggleActiveClass(input.parentElement, true);
    } else {
      errorElement.classList.remove("active");
      toggleActiveClass(input.parentElement, false);
    }
  };

  // Validación del campo Nombre
  nameInput.addEventListener(
    "input",
    debounce(() => {
      const nameValue = nameInput.value.trim();

      if (nameValue === "") {
        nameError.classList.remove("active");
        firstCharError.classList.remove("active");
        toggleActiveClass(nameInput, false);
      } else {
        if (!firstCharRegex.test(nameValue)) {
          firstCharError.classList.add("active");
          toggleActiveClass(nameInput, true);
        } else {
          firstCharError.classList.remove("active");
        }

        validateInput(nameInput, nameRegex, nameError);
      }

      checkFormValidity();
    }, 500)
  );

  // Validación del campo Email
  emailInput.addEventListener(
    "input",
    debounce(() => {
      validateInput(emailInput, emailRegex, emailError);
      const emailValue = emailInput.value.trim();

      if (emailValue === "") {
        toggleActiveClass(emailInput, false);
      } else {
        toggleActiveClass(emailInput, !emailRegex.test(emailValue));
      }

      checkFormValidity();
    }, 500)
  );

  // Validación del campo Message
  message.addEventListener("input", checkFormValidity);

  // Enviar Formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Obtener valores de los campos
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = message.value.trim();

    // Comprobar si los campos son validos
    const isNameValid = nameRegex.test(nameValue);
    const isEmailValid = emailRegex.test(emailValue);

    // Actualizar clases de error para campos vacíos
    toggleActiveClass(nameInput, !isNameValid);
    toggleActiveClass(emailInput, !isEmailValid);
    toggleActiveClass(message, messageValue === "");

    // Si todos los campos estan vacios no enviar el formulario
    if (!isNameValid || !isEmailValid || messageValue === "") return;

    // Si los campos son validos iniciar el proceso de envio
    if (isNameValid && isEmailValid) {
      const loader = document.getElementById("loader");
      loader.style.display = "flex";
      formButton.classList.remove("active");

      fetch("https://formsubmit.co/ajax/axlto@hotmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then(() => {
          modal.classList.add("active");
          form.reset();
          checkFormValidity();
        })
        .catch((err) => {
          const message =
            err.statusText || "Ocurrió un error, intente nuevamente";
          Swal.fire({
            icon: "error",
            title: `Error ${err.status}`,
            text: message,
            confirmButtonText: "Aceptar",
          });
          form.reset();
          checkFormValidity();
        })
        .finally(() => {
          loader.style.display = "none";
          formButton.classList.remove("active");
          setTimeout(() => {
            modal.classList.remove("active");
          }, 2000);
        });
    } else {
      if (!isNameValid) nameError.classList.add("active");
      if (!isEmailValid) emailError.classList.add("active");
    }
  });
};
