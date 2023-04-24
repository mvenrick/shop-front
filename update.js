const productId = document.querySelector("#product-id");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productQty = document.querySelector("#product-quantity");
const productDesc = document.querySelector("#product-description");
const updateProductButton = document.querySelector("#update-product");

let newProductId = null;
let newProductName = "";
let newProductPrice = "";
let newProductQuantity = null;
let newProductDescription = "";


const getId = productId.addEventListener("change", (event) => {
    newProductId = productId.value;
});
const getName = productName.addEventListener("change", (event) => {
    newProductName = productName.value;
});
const getPrice = productPrice.addEventListener("change", (event) => {
    newProductPrice = productPrice.value;
});
const getQuantity = productQty.addEventListener("change", (event) => {
    newProductQuantity = productQty.value;
});
const getDescription = productDesc.addEventListener("change", (event) => {
    newProductDescription = productDesc.value;
});

let apiUrl = "http://localhost:8080/api/products/";


const updateProduct = updateProductButton.addEventListener("click", (data) => {
    fetch(apiUrl + newProductId, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify
            (data = {
                "id": newProductId, "name": newProductName, "price": newProductPrice, "quantity": newProductQuantity,
                "description": newProductDescription
            })
    })
})
