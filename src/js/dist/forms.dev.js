"use strict";

/// EMAIL
var valMail = function valMail(nameInput) {
  if (nameInput.value.length < 1) {
    nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
  } else {
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validNumbre = regEx.test(nameInput.value);

    if (!validNumbre) {
      nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
      nameInput.closest(".input__group").querySelector(".error-input").innerText = "Verifica el formato de email ";
    } else {
      nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");
    }
  }
}; /// TEXTO


var valText = function valText(nameInput) {
  var regEx = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
  var validText = regEx.test(nameInput.value);

  if (nameInput.value.length < 1) {
    nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
  } else {
    nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");

    if (!validText) {
      nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
      nameInput.closest(".input__group").querySelector(".error-input").innerText = "Solo se permiten letras";
    } else {
      nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");
    }
  }
}; /// NUMEROS


var valNum = function valNum(nameInput) {
  if (nameInput.value.length < 1) {
    nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
  } else {
    var regEx = /^[0-9]+$/;
    var validEmail = regEx.test(nameInput.value);

    if (!validEmail) {
      nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
      nameInput.closest(".input__group").querySelector(".error-input").innerText = "Solo se permiten números";
    } else {
      nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");
    }
  }
}; /// TEXTO Y NUMERO


var valTextNum = function valTextNum(nameInput) {
  if (nameInput.value.length < 1) {
    nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
  } else {
    // nameInput.siblings(".error-input").remove();
    var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
    var validText = regEx.test(nameInput.value);

    if (!validText) {
      nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
      nameInput.closest(".input__group").querySelector(".error-input").innerText = "Special characters are not allowed";
    } else {
      nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");
    }
  }
}; /// FECHA


var valFecha = function valFecha(nameInput) {
  if (nameInput.value.length < 1) {
    nameInput.closest(".input__group").querySelector(".error-input").classList.add("show");
  } else {
    nameInput.closest(".input__group").querySelector(".error-input").classList.remove("show");
  }
}; /// COMBOS


var valCombos = function valCombos(nameInput) {
  if (nameInput.value == "") {
    nameInput.parentNode.querySelector(".error-input").classList.add("show");
  }

  nameInput.onchange = function () {
    if (!nameInput.value == "") {
      nameInput.parentNode.querySelector(".error-input").classList.remove("show");
    }
  }; // var combosContacto = $(nameInput);
  // combosContacto.each(function () {
  //     $(this).change(function () {
  //         if ($(this).val() != null) {
  //             $(this).siblings(".error-input").remove();
  //         }
  //     });
  //     if ($(this).val() == null) {
  //         $(this).siblings(".error-input").remove();
  //         $(this).after('<.error-input class="error-input"> Campo requerido </.error-input>');
  //     }
  // });

};

console.log("s8");

var validarForm = function validarForm() {
  var form = document.querySelector("#exampleModal form"),
      btnContacto = document.querySelector("#btn-connect"),
      inputNombre = document.querySelector("#input-name"),
      inputEmail = document.querySelector("#input-email"),
      inputPhone = document.querySelector("#input-phone"),
      inputCountry = document.querySelector("#input-country"),
      inputMsj = document.querySelector("#msj-contacto");

  btnContacto.onclick = function () {
    valText(inputNombre);
    valMail(inputEmail); // valNum(inputPhone);
    // valText(inputCountry);

    valTextNum(inputMsj);
    var msjsError = document.querySelectorAll(".error-input.show");

    if (msjsError.length == 0) {
      // console.log("si");
      btnContacto.classList.add("active");
      btnContacto.value = "MESSAGE SENT";
      setTimeout(function () {
        form.submit();
        form.reset();
        console.log("loading");
      }, 1500);
      return false;
    } else {
      console.log("no");
      return false;
    }
  };
};

validarForm();
//# sourceMappingURL=forms.dev.js.map
