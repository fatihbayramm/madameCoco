function togglePasswordType() {
  const passwordInputDOM = document.querySelector("#login-password-box");
  if (!passwordInputDOM) return;

  document.querySelector(".js-show-password").addEventListener("click", () => {
    if (passwordInputDOM.type === "password") {
      passwordInputDOM.type = "text";
      document.querySelector(".bi-eye").classList.add("bi-eye-slash");
      document.querySelector(".bi-eye-slash").classList.remove("bi-eye");
    } else {
      passwordInputDOM.type = "password";
      document.querySelector(".bi-eye-slash").classList.add("bi-eye");
      document.querySelector(".bi-eye").classList.remove("bi-eye-slash");
    }
  });
}

togglePasswordType();
