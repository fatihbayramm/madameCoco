function productCounter() {
  const deacreaseBtnDOM = document.querySelector(".js-deacrease-button");
  const increaseBtnDOM = document.querySelector(".js-increase-button");
  const quantityDOM = document.querySelector(".js-quantity");
  if (!deacreaseBtnDOM) return;
  let number = 1;
  quantityDOM.innerHTML = number;
  deacreaseBtnDOM.addEventListener("click", () => {
    if (number == 1) return;
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

function disableClick(className) {
  let notSelectableVariants = document.querySelectorAll(className);

  notSelectableVariants.forEach((variant) => {
    variant.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });
  });
}

function changeMeasuresClasses() {
  if (!document.querySelector(".selected-product-measure")) return;
  document
    .querySelector(".selected-product-measure")
    .classList.remove("measure");

  document
    .querySelectorAll(".is-not-selectable-measure")
    .forEach((notSelectable) => {
      notSelectable.classList.remove("measure");
    });
}

console.log("Fatih Bayram is here !");

productCounter();
runAccordionMenu();
autoAccordionMenu();
disableClick(".is-not-selectable-color");
disableClick(".is-not-selectable-measure");
changeMeasuresClasses();
