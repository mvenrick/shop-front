const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productQty = document.querySelector("#product-quantity");
const productDesc = document.querySelector("#product-description");


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
const getPrice = productPrice.addEventListener("change", (event) => {
    newProductPrice = productPrice.value;
});
const getQuantity = productQty.addEventListener("change", (event) => {
    newProductQuantity = productQty.value;
});
const getDescription = productDesc.addEventListener("change", (event) => {
    newProductDescription = productDesc.value;
});


