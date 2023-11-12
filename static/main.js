const productListDOM = document.querySelector(".js-product-list");
// js ile etkilesimde olan element class veya idlerine js prefix i eklenecek.
// ornek #doublelayout #js-doublelayout ek olarak js prefix li bir class asla 
// css dosyasinda olmamali.
function removeClass() {
    productListDOM.removeAttribute("class");
}

function doubleLayout() {
    const doubleLayoutDOM = document.querySelector("#doublelayout");
    if (!doubleLayoutDOM) {
        return 
    }
    doubleLayoutDOM.addEventListener("click", () => {
        removeClass();
        productListDOM.classList.add("product_list_double");
})
}

function defaultLayout() {
    const defaultLayoutDOM = document.querySelector("#defaultlayout");
    if (!defaultLayoutDOM) {
        return 
    }
    defaultLayoutDOM.addEventListener("click", () => {
        removeClass();
        productListDOM.classList.add("js-product-list");
})
}

function hexaLayout() {
    const hexaLayoutDOM = document.querySelector("#hexalayout"); 
    if (!hexaLayoutDOM) {
        return 
    }
    hexaLayoutDOM.addEventListener("click", () => {
        removeClass();
        productListDOM.classList.add("product_list_hexa");
})  
}

function productCounter() {
    const deacreaseBtnDOM = document.querySelector("#deacreaseButton");
    const increaseBtnDOM = document.querySelector("#increaseButton");
    const quantityDOM = document.querySelector(".quantity");
    if (!deacreaseBtnDOM) {
        return
    } 
    let number = 1;
    quantityDOM.innerHTML = number;
    deacreaseBtnDOM.addEventListener("click", () => {
        if (number == 1 ) {
            return 
        } 
        number--;
        quantityDOM.innerHTML = number;
    })
    
    increaseBtnDOM.addEventListener("click", () => {
        number++;
        quantityDOM.innerHTML = number;
    })
}

function accordionMenu() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
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
    if(!filterBtnDOM) {
        return
    }
    const filterDivDOM = document.querySelector(".filter-div");
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
    })
}

function runOrderFilter(event) {
    event.stopPropagation();
    document.getElementById("orderDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".orderButton")) {
      var dropdowns = document.getElementsByClassName("orderDropdownContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
        }
      }
    } 
}



function runColorFilter(event) {
    event.stopPropagation();
    document.getElementById("colorDropdown").classList.toggle("show");
}
  window.onclick = function(event) {
    if (!event.target.matches(".colorFilterButton")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
        }
      }
    } 
}

function runMeasureFilter(event) {
    event.stopPropagation();
    document.getElementById("measureDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".measureFilterButton")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
        }
      }
    } 
}

function runMaterialFilter(event) {
    event.stopPropagation();
    document.getElementById("materialDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".materialFilterButton")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
        }
      }
    } 
}

function runPriceFilter(event) {
    event.stopPropagation();
    document.getElementById("priceDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".priceFilterButton")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
        }
      }
    } 
}




doubleLayout ();
defaultLayout ();
hexaLayout ();
accordionMenu();
productCounter();
runFilterBox();




console.log("Fatih Bayram is here !");








