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

productCounter();
runAccordionMenu();
autoAccordionMenu();
