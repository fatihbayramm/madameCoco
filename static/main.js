const productListDOM = document.querySelector(".product-list");
const doubleLayoutDOM = document.querySelector("#doublelayout");
const defaultLayoutDOM = document.querySelector("#defaultlayout");
const hexaLayoutDOM = document.querySelector("#hexalayout");    

function doubleLayout () {
    doubleLayoutDOM.addEventListener("click", () => {
        productListDOM.removeAttribute("class");
        productListDOM.classList.add("product_list_double");
})
}

function defaultLayout () {
    defaultLayoutDOM.addEventListener("click", () => {
        productListDOM.removeAttribute("class");
        productListDOM.classList.add("product-list");
})
}

function hexaLayout () {
    hexaLayoutDOM.addEventListener("click", () => {
        productListDOM.removeAttribute("class");
        productListDOM.classList.add("product_list_hexa");
})  
}

doubleLayout ();
defaultLayout ();
hexaLayout ();