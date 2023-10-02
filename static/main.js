const productListDOM = document.querySelector(".product-list");
const doubleLayoutDOM = document.querySelector("#doublelayout");
const defaultLayoutDOM = document.querySelector("#defaultlayout");
const hexaLayoutDOM = document.querySelector("#hexalayout");  
const productInfoDOM = document.querySelector(".product-info");
const hexaClass = document.querySelector(".product_list_hexa");
const productListTopDOM = document.querySelector(".product-list-top");


function removeClass() {
    productListDOM.removeAttribute("class");
}

function doubleLayout() {
    doubleLayoutDOM.addEventListener("click", () => {
        removeClass();
        productListDOM.classList.add("product_list_double");
})
}

function defaultLayout() {
    defaultLayoutDOM.addEventListener("click", () => {
        removeClass();
        productListDOM.classList.add("product-list");
})
}

function hexaLayout() {
    hexaLayoutDOM.addEventListener("click", () => {
        removeClass();
        productListDOM.classList.add("product_list_hexa");
        
})  
}



doubleLayout ();
defaultLayout ();
hexaLayout ();

console.log("Fatih Bayram is here !");



{/* <div class="product_list_hexa">
<% products.forEach(product => { %>
    <div class="product_list_div">
        <div>
            <a href=/product/<%= product.pk %>">
                <img src="<%= product.productimage_set[0].image %>" class="product-image"
                alt="Bu dosyanın uzantısı tarayıcınız tarafından desteklenmiyor.">    
            </a>
        </div>
    </div>
<% }); %>
</div> */}







