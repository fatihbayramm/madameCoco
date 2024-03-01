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

function sendRegisterForm() {
  if (!document.querySelector("#register-form")) return;
  document
    .querySelector("#register-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = document.querySelector("#user-name-box").value;
      const lastName = document.querySelector("#user-surname-box").value;
      const email = document.querySelector("#user-email-box").value;
      const phoneNumber = document.querySelector("#user-phone-box").value;
      const password = document.querySelector("#user-password-box").value;

      // const birthdayDay = document.querySelector(".js-user-day").value;
      // console.log(birthdayDay);

      const birthdayMonth = document.querySelector(".js-user-month").value;
      console.log(birthdayMonth);

      const birthdayYear = document.querySelector(".js-user-year").value;
      console.log(birthdayYear);

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

      fetch("/users/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    });
}

// TODO: kayit ve giris sayfasinda arama yeri calismiyor.

togglePasswordType();
sendRegisterForm();
