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

togglePasswordType();
