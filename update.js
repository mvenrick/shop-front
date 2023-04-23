const productId = document.querySelector("#product-id");
const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productQty = document.querySelector("#product-quantity");
const productDesc = document.querySelector("#product-description");

let newProductName = "";

async function updateProduct(url = `http://localhost:8080/api/products/${productId}`,
    data = { "name": newProductName, "price": newProductPrice, "quantity": newProductQuantity, "description": newProductDescription }) {
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response.json();
};

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