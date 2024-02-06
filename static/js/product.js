function fetchData(url) {
  fetch(url)
    .then(function (resp) {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.text();
    })
    .then(function (resp) {
      const parser = new DOMParser();
      const html = parser.parseFromString(resp, "text/html");
      let containerInHTML = html.querySelector(".js-container").innerHTML;
      document.querySelector(".js-container").innerHTML = containerInHTML;
      let productQuantityInHTML = html.querySelector(
        ".js-product-quantity"
      ).innerHTML;
      document.querySelector(".js-product-quantity").innerHTML =
        productQuantityInHTML;
    })
    .catch(function (error) {
      console.error("Fetch or parsing error:", error);
    });
}

function searchProduct() {
  let formElement = document.querySelector("#js-search-form");
  formElement.addEventListener("input", () => {
    let formData = new FormData(formElement);
    let searchBox = formData.get("js-search-box");
    let params = new URLSearchParams(window.location.search);
    params.set("search_text", searchBox);
  });
}

function productCounter() {
  const deacreaseBtnDOM = document.querySelector(".js-deacrease-button");
  const increaseBtnDOM = document.querySelector(".js-increase-button");
  const quantityDOM = document.querySelector(".js-quantity");
  if (!deacreaseBtnDOM) {
    return;
  }
  let number = 1;
  quantityDOM.innerHTML = number;
  deacreaseBtnDOM.addEventListener("click", () => {
    if (number == 1) {
      return;
    }
    number--;
    quantityDOM.innerHTML = number;
  });

  increaseBtnDOM.addEventListener("click", () => {
    number++;
    quantityDOM.innerHTML = number;
  });
}

function runAccordionMenu() {
  let acc = document.getElementsByClassName("js-accordion");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

function autoAccordionMenu() {
  let acc = document.getElementsByClassName("js-accordion");
  window.onload = function () {
    if (acc.length > 0) {
      acc[0].classList.toggle("active");
      let panel = acc[0].nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  };
}

console.log("Fatih Bayram is here !");

searchProduct();
productCounter();
runAccordionMenu();
autoAccordionMenu();
