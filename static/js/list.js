const productListDOM = document.querySelector(".js-product-list");

function removeClass() {
  productListDOM.removeAttribute("class");
}

function doubleLayout() {
  const doubleLayoutDOM = document.querySelector("#js-double-layout");

  if (!doubleLayoutDOM) return;

  doubleLayoutDOM.addEventListener("click", () => {
    removeClass();
    productListDOM.classList.add("product_list_double");
  });
}

function defaultLayout() {
  const defaultLayoutDOM = document.querySelector("#js-default-layout");

  if (!defaultLayoutDOM) return;

  defaultLayoutDOM.addEventListener("click", () => {
    removeClass();
    productListDOM.classList.add("product-list");
  });
}

function hexaLayout() {
  const hexaLayoutDOM = document.querySelector("#js-hexa-layout");

  if (!hexaLayoutDOM) return;

  hexaLayoutDOM.addEventListener("click", () => {
    removeClass();
    productListDOM.classList.add("product_list_hexa");
  });
}

function runFilterBox() {
  const filterBtnDOM = document.querySelector(".js-filter-button");
  const filterDivDOM = document.querySelector(".js-filter-div");
  filterDivDOM.style.display = "none";
  let counter = 0;

  if (!filterBtnDOM) return;

  filterBtnDOM.addEventListener("click", () => {
    counter++;

    const color = counter % 2 == 1 ? "#B94E0C" : "#323E48";
    const display = counter % 2 == 1 ? "flex" : "none";

    filterBtnDOM.style.color = color;
    filterDivDOM.style.display = display;
    filterDivDOM.style.borderTop =
      counter % 2 == 1 ? "1px solid black" : "none";
  });
}

document.querySelectorAll(".js-filter-show-button").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    let currentDropdownContent = e.currentTarget.parentElement.querySelector(
      ".js-dropdown-content"
    );
    document.querySelectorAll(".js-dropdown-content").forEach(function (el) {
      if (el != currentDropdownContent) {
        el.classList.remove("show");
      } else {
        currentDropdownContent.classList.toggle("show");
      }
    });
  });
});

window.onclick = function (event) {
  document.querySelectorAll(".js-dropdown-content").forEach(function (el) {
    if (event.target !== el && !el.contains(event.target)) {
      el.classList.remove("show");
    }
  });
};

document.querySelectorAll(".js-filter-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    let params = new URLSearchParams(window.location.search);
    if (event.target.checked) {
      params.append(event.target.name, event.target.value);
    } else {
      params.delete(event.target.name, event.target.value);
    }

    window.history.pushState(null, "", "?" + params.toString());
    let url = window.location.href;
    fetch(url)
      .then(function (resp) {
        return resp.text();
      })
      .then(function (resp) {
        const parser = new DOMParser();
        const html = parser.parseFromString(resp, "text/html");
        let containerInHTML = html.querySelector(".js-container").innerHTML;
        document.querySelector(".js-container").innerHTML = containerInHTML;
      });
  });
});

// function runOrderFilter(event) {
//   event.stopPropagation();
//   document.getElementById("js-order-dropdown").classList.toggle("show");
// }

document.querySelectorAll(".js-order-button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    let currentDropdownContent = e.currentTarget.parentElement.querySelector(
      ".js-order-dropdown-content"
    );
    document
      .querySelectorAll(".js-order-dropdown-content")
      .forEach(function (el) {
        if (el != currentDropdownContent) {
          el.classList.remove("show");
        } else {
          currentDropdownContent.classList.toggle("show");
        }
      });
  });
});

window.onclick = function (event) {
  document
    .querySelectorAll(".js-order-dropdown-content")
    .forEach(function (el) {
      if (event.target !== el && !el.contains(event.target)) {
        el.classList.remove("show");
      }
    });
};

document.querySelectorAll(".js-orders").forEach((order) => {
  order.addEventListener("click", (event) => {
    let params = new URLSearchParams(window.location.search);
    if (event.target) {
      params.append(event.target.label, event.target.value);
      console.log(event.target.label, event.target.value);
    } else {
      params.delete(event.target.label, event.target.value);
    }

    window.history.pushState(null, "", "?" + params.toString());
    let url = window.location.href;

    fetch(url)
      .then(function (resp) {
        return resp.text();
      })
      .then(function (resp) {
        const parser = new DOMParser();
        const html = parser.parseFromString(resp, "text/html");
        let containerInHTML = html.querySelector(".js-container").innerHTML;
        document.querySelector(".js-container").innerHTML = containerInHTML;
      });
  });
});

// document.querySelectorAll(".js-filter-checkbox").forEach((checkbox) => {
//   checkbox.addEventListener("change", (event) => {
//     let params = new URLSearchParams(window.location.search);
//     if (event.target.checked) {
//       params.append(event.target.name, event.target.value);
//     } else {
//       params.delete(event.target.name, event.target.value);
//     }

//     window.history.pushState(null, "", "?" + params.toString());
//     let url = window.location.href;
//     fetch(url)
//       .then(function (resp) {
//         return resp.text();
//       })
//       .then(function (resp) {
//         const parser = new DOMParser();
//         const html = parser.parseFromString(resp, "text/html");
//         let containerInHTML = html.querySelector(".js-container").innerHTML;
//         document.querySelector(".js-container").innerHTML = containerInHTML;
//       });
//   });
// });

// normalde order-dropdown menu

// window.onclick = function (event) {
//   if (!event.target.matches(".js-order-button")) {
//     var dropdowns = document.getElementsByClassName(
//       "js-order-dropdown-content"
//     );
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

doubleLayout();
defaultLayout();
hexaLayout();
runFilterBox();

console.log("Fatih Bayram is here !");
