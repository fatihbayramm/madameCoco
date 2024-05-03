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

function sendLoginForm() {
  let loginFormDOM = document.getElementById("login-form");

  if (!loginFormDOM) return;
  loginFormDOM.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("login-mail-box");
    const password = document.getElementById("login-password-box");

    const formData = {
      email: email,
      password: password,
    };

    fetch("/users/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Başarılı:", data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  });
}

togglePasswordType();
sendLoginForm();
