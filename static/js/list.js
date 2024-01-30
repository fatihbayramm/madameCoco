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
  if (!filterBtnDOM) return;
  const filterDivDOM = document.querySelector(".js-filter-div");
  filterDivDOM.style.display = "none";
  let counter = 0;

  filterBtnDOM.addEventListener("click", () => {
    counter++;

    const color = counter % 2 == 1 ? "#B94E0C" : "#323E48";
    const display = counter % 2 == 1 ? "flex" : "none";
    // TODO: resolve this by adding class name
    filterBtnDOM.style.color = color;
    filterDivDOM.style.display = display;
    filterDivDOM.style.borderTop =
      counter % 2 == 1 ? "1px solid black" : "none";

    let params = new URLSearchParams(window.location.search);
    renderAppliedFilters(params);
    document.querySelector(".js-selected-filters").classList.toggle("show");
  });
}

function runFilterShowButton() {
  document.querySelectorAll(".js-filter-show-button").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      let currentDropdownContent = e.currentTarget.parentElement.querySelector(
        ".js-filter-dropdown-content"
      );
      document
        .querySelectorAll(".js-filter-dropdown-content")
        .forEach(function (el) {
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
  document
    .querySelectorAll(".js-filter-dropdown-content")
    .forEach(function (el) {
      if (event.target !== el && !el.contains(event.target)) {
        el.classList.remove("show");
      }
    });
};

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
      // TODO: add js- prefix
      let productQuantityInHTML =
        html.querySelector(".product-quantity").innerHTML;
      document.querySelector(".product-quantity").innerHTML =
        productQuantityInHTML;
    })
    .catch(function (error) {
      console.error("Fetch or parsing error:", error);
    });
}

function runFilter() {
  document.querySelectorAll(".js-choice").forEach((choiceDiv) => {
    choiceDiv.addEventListener("click", () => {
      const checkbox = choiceDiv.querySelector(".js-filter-checkbox");
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event("change"));
      let params = new URLSearchParams(window.location.search);
      if (checkbox.checked) {
        params.append(checkbox.name, checkbox.value);
      } else {
        params.delete(checkbox.name, checkbox.value);
      }
      renderAppliedFilters(params);
      window.history.pushState(null, "", "?" + params.toString());
      let url = window.location.href;
      fetchData(url);
      document.querySelector(".js-selected-filters").style.display = "block";
    });
  });
}

function runOrderButton() {
  let orderBtnDOM = document.querySelector(".js-order-button");
  if (!orderBtnDOM) return;
  orderBtnDOM.addEventListener("click", function (e) {
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
}

window.onclick = function (event) {
  document
    .querySelectorAll(".js-order-dropdown-content")
    .forEach(function (el) {
      if (event.target !== el && !el.contains(event.target)) {
        el.classList.remove("show");
      }
    });
};

function runOrder() {
  let orderBtnDOM = document.querySelectorAll(".js-orders");
  orderBtnDOM.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let params = new URLSearchParams(window.location.search);
      let value = event.target.getAttribute("data-value");
      if (event.target && event.target.classList.contains("js-orders")) {
        document.querySelectorAll(".js-orders").forEach((el) => {
          el.classList.remove("is_selected");
        });
        event.target.classList.add("is_selected");
        document.querySelector(".js-order-button").firstElementChild.innerHTML =
          event.target.innerHTML;
        params.set("sorter", value);
      } else {
        params.delete("sorter", value);
      }
      window.history.pushState(null, "", "?" + params.toString());
      let url = window.location.href;
      fetchData(url);
    });
  });
}

function renderAppliedFilters(params) {
  let filtersHTML = [];
  for (let entry of params.entries()) {
    if (entry[0] == "sorter") {
      continue;
    }
    let [currentFilterName, currentFilterValue] = entry;
    filtersHTML.push(
      `
        <div class="clear-specific-filters-box js-clear-specific-filters-box">
          <button name="${currentFilterName}" value="${currentFilterValue}">${currentFilterValue}</button>
          <div class="js-clear-specific-filter-icon">
            <i class="bi bi-x"></i>
          </div>
        </div>
        `
    );
  }

  document.querySelector(".js-clear-specific-filters").innerHTML =
    filtersHTML.join("");

  document
    .querySelectorAll(".js-clear-specific-filters-box")
    .forEach((filterBox) => {
      filterBox.addEventListener("click", (event) => {
        let filterName = event.currentTarget.firstElementChild.name;
        let filterValue = event.currentTarget.firstElementChild.value;
        params.delete(filterName, filterValue);
        window.history.pushState(null, "", "?" + params.toString());
        let url = window.location.href;
        fetchData(url);

        event.currentTarget.parentElement.removeChild(event.currentTarget);
        document.querySelectorAll(".js-filter-checkbox").forEach((checkbox) => {
          if (checkbox.value === filterValue) {
            checkbox.checked = false;
          }
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
    fetchData(url);
    document
      .querySelectorAll(".js-clear-specific-filters-box")
      .forEach((filter) => {
        filter.parentElement.removeChild(filter);
      });

    document.querySelector(".js-selected-filters").style.display = "none";
    document.querySelectorAll(".js-filter-checkbox").forEach((checkbox) => {
      checkbox.checked = false;
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
