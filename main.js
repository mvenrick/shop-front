const productButton = document.querySelector("#get-all-products");
const productList = document.querySelector("#product-list");

function listProduct(products) {
    for (let prod of products) {
        let productLineItem = document.createElement("li");
        productLineItem.innerText = prod.name;
        productList.appendChild(productLineItem);
    }

}

async function getJson() {
    let response = await fetch("http://localhost:8080/api/products");
    let data = await response.json();
    listProduct(data);
}

// Example POST method implementation:
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        // cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "omit", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: "follow", // manual, *follow, error
        // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData("http://localhost:8080/api/products", { "name": "Light Roast", "price": 10.99, "quantity": 56, "description": "Nutty and mildly acidic" })
    .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });

