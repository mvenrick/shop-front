const productButton = document.querySelector("#get-all-products");
const productList = document.querySelector("#product-list");
let newProductCollection = [];

//potentially change to add data to the newProductCollection at the GET method and then listProduct will pull from the array


function listProduct(products) {
    for (let prod of products) {
        let productLineItem = document.createElement("li");
        productLineItem.innerText =
            `Id: ${prod.id},\nName: ${prod.name},\nPrice: ${prod.price},\nQuantity: ${prod.quantity},\nDescription: ${prod.description}`;
        productList.appendChild(productLineItem);
        newProductCollection.push(prod);
    }

};

async function getJson() {
    let response = await fetch("http://localhost:8080/api/products");
    let data = await response.json();
    listProduct(data);
};