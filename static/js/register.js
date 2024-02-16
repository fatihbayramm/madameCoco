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

function openBirthdayDropdowns() {
  const dayDOM = document.querySelectorAll(".js-birthday");
  if (!dayDOM) return;
  dayDOM.forEach((birthday) => {
    birthday.addEventListener("click", (event) => {
      event.target.parentElement
        .querySelector(".js-birthday-dropdown")
        .classList.toggle("birthday-dropdown-show");
    });
  });
}

function selectBirthday() {
  document.querySelectorAll(".js-day-box").forEach((dayBox) => {
    dayBox.addEventListener("click", (event) => {
      event.target.parentElement.previousElementSibling.querySelector(
        ".js-bt-span"
      ).innerHTML = dayBox.innerHTML;
    });
  });
}

function sendRegisterForm() {
  let registerForm = document.querySelector("#register-form");
  if (!registerForm) return;
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(this);

    fetch("https://www.madamecoco.com/users/register/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

// TODO: kayit ve giris sayfasinda arama yeri calismiyor.

// TODO: dropdown menulerin disina tiklayinca kapanacak.

togglePasswordType();
openBirthdayDropdowns();
selectBirthday();
sendRegisterForm();
