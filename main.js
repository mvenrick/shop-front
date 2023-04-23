const productButton = document.querySelector("#get-all-products");
const productList = document.querySelector("#product-list");

const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productQty = document.querySelector("#product-quantity");
const productDesc = document.querySelector("#product-description");

let newProductName = "";

function listProduct(products) {
    for (let prod of products) {
        let productLineItem = document.createElement("li");
        productLineItem.innerText = prod.name;
        productList.appendChild(productLineItem);
    }

};

async function getJson() {
    let response = await fetch("http://localhost:8080/api/products");
    let data = await response.json();
    listProduct(data);
};

async function postProduct(url = "http://localhost:8080/api/products",
    data = { "name": newProductName, "price": 10.99, "quantity": 23, "description": "nice" }) {
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


// postData(, { "name": newProductName, "price": 10.99, "quantity": 56, "description": "Nutty and mildly acidic" });
    // .then((data) => {
    //     console.log(data);
