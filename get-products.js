const productButton = document.querySelector("#get-all-products");
const productList = document.querySelector("#product-list");

function listProduct(products) {
    for (let prod of products) {
        let productLineItem = document.createElement("li");
        productLineItem.innerText =
            `Name: ${prod.name},\nPrice: ${prod.price},\nQuantity: ${prod.quantity},\nDescription: ${prod.description}`;
        productList.appendChild(productLineItem);
    }

};

async function getJson() {
    let response = await fetch("http://localhost:8080/api/products");
    let data = await response.json();
    listProduct(data);
};