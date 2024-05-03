function searchProduct() {
  let formElement = document.querySelector("#js-search-form");
  formElement.addEventListener("input", () => {
    let formData = new FormData(formElement);
    let searchBox = formData.get("js-search-box");
    let params = new URLSearchParams(window.location.search);
    params.set("search_text", searchBox);
  });
}
