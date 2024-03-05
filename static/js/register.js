function togglePasswordType() {
  const passwordInputDOM = document.querySelector("#user-password-box");
  if (!passwordInputDOM) return;

  document
    .querySelector(".js-register-show-password")
    .addEventListener("click", () => {
      if (passwordInputDOM.type === "password") {
        passwordInputDOM.type = "text";
        document
          .querySelector(".js-bi-eye-fill")
          .classList.add("bi-eye-slash-fill");
        document
          .querySelector(".bi-eye-slash-fill")
          .classList.remove("js-bi-eye-fill");
      } else {
        passwordInputDOM.type = "password";
        document
          .querySelector(".bi-eye-slash-fill")
          .classList.add("js-bi-eye-fill");
        document
          .querySelector(".js-bi-eye-fill")
          .classList.remove("bi-eye-slash-fill");
      }
    });
}

// function selectedOption(day, callback) {
//   let optionDOM = document.querySelector(".js-option");
//   if (!optionDOM) return;

//   const selectElement = document.getElementById(day);
//   let selectedValue;

//   selectElement.addEventListener("change", (event) => {
//     const selectedOption = event.target.options[event.target.selectedIndex];
//     selectedValue = selectedOption.value;
//     callback(selectedValue);
//   });
//   return selectedValue;
// }

function sendRegisterForm() {
  if (!document.querySelector("#register-form")) return;

  document
    .getElementById("register-form")
    .addEventListener("submit", (event) => {
      event.preventDefault(); // Formun varsayılan davranışını engelle

      // Formdaki girdileri al
      const firstName = document.getElementById("user-name-box").value;
      const lastName = document.getElementById("user-surname-box").value;
      const email = document.getElementById("user-email-box").value;
      const phoneNumber = document.getElementById("user-phone-box").value;
      const password = document.getElementById("user-password-box").value;
      const birthdayDay = document.getElementById("js-user-day").value;
      const birthdayMonth = document.getElementById("js-user-month").value;
      const birthdayYear = document.getElementById("js-user-year").value;

      // Form verilerini bir JavaScript nesnesinde topla
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        birthdayDay: birthdayDay,
        birthdayMonth: birthdayMonth,
        birthdayYear: birthdayYear,
      };

      // POST isteği gönder
      fetch("/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Başarılı:", data);
          // Başarılı bir yanıt aldığınızda, istediğiniz işlemleri yapabilirsiniz.
        })
        .catch((error) => {
          console.error("Hata:", error);
          // Hata durumunda, uygun bir şekilde ele alabilirsiniz.
        });
    });
}

// TODO: kayit ve giris sayfasinda arama yeri calismiyor.

togglePasswordType();
sendRegisterForm();
