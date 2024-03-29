const productId = document.querySelector("#product-id");
const deleteProductButton = document.querySelector("#delete-product");

let newProductId = null;


const getId = productId.addEventListener("change", (event) => {
    newProductId = productId.value;
});


let apiUrl = "http://localhost:8080/api/products/";


const deleteProduct = deleteProductButton.addEventListener("click", () => {
    fetch(apiUrl + newProductId, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'DELETE',
    })
});