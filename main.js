

const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productQty = document.querySelector("#product-quantity");
const productDesc = document.querySelector("#product-description");

let newProductName = "";

async function postProduct(url = "http://localhost:8080/api/products",
    data = { "name": newProductName, "price": newProductPrice, "quantity": newProductQuantity, "description": newProductDescription }) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return response.json();
};

const getName = productName.addEventListener("change", (event) => {
    newProductName = productName.value;
});
const getPrice = productName.addEventListener("change", (event) => {
    newProductPrice = productPrice.value;
});
const getQuantity = productName.addEventListener("change", (event) => {
    newProductQuantity = productQty.value;
});
const getDescription = productName.addEventListener("change", (event) => {
    newProductDescription = productDesc.value;
});


