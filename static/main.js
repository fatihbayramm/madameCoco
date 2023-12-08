// TODO: aradiginiz sonuc bulunamadi yazisi gorseli eklenecek.
// TODO: orderingi hallet.
// TODO: projeyi responsive yap.
// TODO: sag ustte gozuken filtering yapinca yanlis gozuken urun sayisi sorununu duzelt.
// TODO: layout fonksiyonlarini da dinamik yapmayi dene.
// TODO: Filtering i sayfada yapiskan yap.
// TODO: search olayi yapilacak.
// TODO: tum filtreleri temizle yap.
// TODO: checboxlarda yaziya tiklayinca da calissin.
// TODO: urun detay sayfasinda urunlerun kucuk resimlerini yap. secili olan renk halka icinde olacak.
const productListDOM = document.querySelector(".js-product-list");

function removeClass() {
  productListDOM.removeAttribute("class");
}

function doubleLayout() {
  const doubleLayoutDOM = document.querySelector("#js-double-layout");
  if (!doubleLayoutDOM) {
    return;
  }
  doubleLayoutDOM.addEventListener("click", () => {
    removeClass();
    productListDOM.classList.add("product_list_double");
  });
}

function defaultLayout() {
  const defaultLayoutDOM = document.querySelector("#js-default-layout");
  if (!defaultLayoutDOM) {
    return;
  }
  defaultLayoutDOM.addEventListener("click", () => {
    removeClass();
    productListDOM.classList.add("product-list");
  });
}

function hexaLayout() {
  const hexaLayoutDOM = document.querySelector("#js-hexa-layout");
  if (!hexaLayoutDOM) {
    return;
  }
  hexaLayoutDOM.addEventListener("click", () => {
    removeClass();
    productListDOM.classList.add("product_list_hexa");
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

function accordionMenu() {
  var acc = document.getElementsByClassName("js-accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

function runFilterBox() {
  const filterBtnDOM = document.querySelector(".js-filter-button");
  if (!filterBtnDOM) {
    return;
  }
  const filterDivDOM = document.querySelector(".js-filter-div");
  filterDivDOM.style.display = "none";
  let counter = 0;
  filterBtnDOM.addEventListener("click", () => {
    counter++;
    let filterStyle = filterBtnDOM.style;
    if (counter % 2 == 1) {
      filterBtnDOM.style.color = "#B94E0C";
      filterDivDOM.style.display = "flex";
      filterDivDOM.style.borderTop = "1px solid black";
    } else {
      filterBtnDOM.style.color = "#323E48";
      filterDivDOM.style.display = "none";
    }
  });
}

function runOrderFilter(event) {
  event.stopPropagation();
  document.getElementById("js-orderDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".js-order-button")) {
    var dropdowns = document.getElementsByClassName(
      "js-order-dropdown-content"
    );
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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

// let url2 = window.location.href;
// fetch(url2)
//   .then(function (resp) {
//     return resp.status;
//   })
//   .then(function (statusCode) {
//     if (statusCode == "500") {
//       console.log("500 aldin fatihh");
//     } else {
//       console.log("suan sorun yok.");
//       console.log(statusCode);
//     }
//   });
// console.log(window.location.href);

doubleLayout();
defaultLayout();
hexaLayout();
accordionMenu();
productCounter();
runFilterBox();

console.log("Fatih Bayram is here !");
