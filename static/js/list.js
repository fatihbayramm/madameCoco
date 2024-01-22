const productListDOM = document.querySelector(".js-product-list");
const filterShowButtonsDOM = document.querySelectorAll(
  ".js-filter-show-button"
);
const filterDropdownContentsDOM = document.querySelectorAll(
  ".js-filter-dropdown-content"
);
const filterCheckboxesDOM = document.querySelectorAll(".js-filter-checkbox");
const orderBtnDOM = document.querySelectorAll(".js-order-button");
const orderDropdownContentDOM = document.querySelectorAll(
  ".js-order-dropdown-content"
);
const ordersDOM = document.querySelectorAll(".js-orders");
const selectedFiltersDOM = document.querySelector(".js-selected-filters");

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
  if (!filterBtnDOM) return;
  const filterDivDOM = document.querySelector(".js-filter-div");
  filterDivDOM.style.display = "none";
  let counter = 0;

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

function runFilterShowButton() {
  filterShowButtonsDOM.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      let currentDropdownContent = e.currentTarget.parentElement.querySelector(
        ".js-filter-dropdown-content"
      );
      filterDropdownContentsDOM.forEach(function (el) {
        if (el != currentDropdownContent) {
          el.classList.remove("show");
        } else {
          currentDropdownContent.classList.toggle("show");
        }
      });
    });
  });
}

window.onclick = function (event) {
  filterDropdownContentsDOM.forEach(function (el) {
    if (event.target !== el && !el.contains(event.target)) {
      el.classList.remove("show");
    }
  });
};

function runFilter() {
  filterCheckboxesDOM.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      let params = new URLSearchParams(window.location.search);
      if (event.target.checked) {
        params.append(event.target.name, event.target.value);
      } else {
        params.delete(event.target.name, event.target.value);
      }

      const clearSpecificFiltersDOM = document.querySelector(
        ".js-clear-specific-filters"
      );

      let filtersHTML = [];
      params.forEach((currentFilterName, currentFilterValue) => {
        console.log(currentFilterName, currentFilterValue);
        filtersHTML.push(
          `
        <div class="clear-specific-filters-box js-clear-specific-filters-box">
          <p name="${currentFilterName}" value="${currentFilterValue}">${currentFilterName}</p>
          <div class="js-clear-specific-filter-icon">
            <i class="bi bi-x"></i>
          </div>
        </div>
        `
        );
      });

      console.log(params);

      clearSpecificFiltersDOM.innerHTML = filtersHTML.join("");

      document
        .querySelectorAll(".js-clear-specific-filters-box")
        .forEach((filterBox) => {
          filterBox.addEventListener("click", (event) => {
            const filterName = event.currentTarget.querySelector("p").name;
            console.log(filterName);
            const filterValue = event.currentTarget.querySelector("p").value;
            console.log(filterValue);
            params.delete(filterName, filterValue);
            window.history.pushState(null, "", "?" + params.toString());
            let url = window.location.href;
            fetch(url)
              .then(function (resp) {
                return resp.text();
              })
              .then(function (resp) {
                const parser = new DOMParser();
                const html = parser.parseFromString(resp, "text/html");
                let containerInHTML =
                  html.querySelector(".js-container").innerHTML;
                document.querySelector(".js-container").innerHTML =
                  containerInHTML;
                selectedFiltersDOM.style.display = "block";
              });
          });
        });

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
          selectedFiltersDOM.style.display = "block";
        });
    });
  });
}

function runOrderButton() {
  orderBtnDOM.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      let currentDropdownContent = e.currentTarget.parentElement.querySelector(
        ".js-order-dropdown-content"
      );
      orderDropdownContentDOM.forEach(function (el) {
        if (el != currentDropdownContent) {
          el.classList.remove("show");
        } else {
          currentDropdownContent.classList.toggle("show");
        }
      });
    });
  });
}

window.onclick = function (event) {
  orderDropdownContentDOM.forEach(function (el) {
    if (event.target !== el && !el.contains(event.target)) {
      el.classList.remove("show");
    }
  });
};

function runOrder() {
  ordersDOM.forEach((order) => {
    order.addEventListener("click", (event) => {
      let params = new URLSearchParams(window.location.search);
      if (event.target && event.target.classList.contains("js-orders")) {
        const value = event.target.getAttribute("data-value");
        params.set("sorter", value);
      } else {
        params.delete("sorter", value);
      }

      window.history.pushState(null, "", "?" + params.toString());

      let url = window.location.href;
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
        })
        .catch(function (error) {
          console.error("Fetch or parsing error:", error);
        });
    });
  });
}

function clearAllFilters() {
  const clearAllFiltersDOM = document.querySelector(".js-clear-all-filters");
  if (!clearAllFiltersDOM) {
    return;
  }
  clearAllFiltersDOM.addEventListener("click", () => {
    let params = new URLSearchParams(window.location.search);
    params = "";
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
        selectedFiltersDOM.style.display = "none";
        filterCheckboxesDOM.forEach((checkbox) => {
          checkbox.checked = false;
        });
      });
  });
}

doubleLayout();
defaultLayout();
hexaLayout();
runFilterBox();
runFilterShowButton();
runFilter();
runOrderButton();
runOrder();
clearAllFilters();

console.log("Fatih Bayram is here !");
