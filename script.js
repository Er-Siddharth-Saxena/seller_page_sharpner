function handleFormSubmit(event) {
    console.log("Form submitted");
    event.preventDefault();

    const productDetails = {
        sellingPrice: event.target.sellingprice.value,
        productName: event.target.productname.value,
        typeOfProduct: event.target.type.value
    };

    axios
    .post('https://crudcrud.com/api/4ac489c2679445f8ab6b64b033fac087/selling', productDetails)
    .then((response) => {
        console.log("Response data:", response.data);
        displayProductOnScreen(response.data);
    })
    .catch((error) => console.log(error));


    document.getElementById("sellingprice").value = "";
    document.getElementById("productname").value = "";
    document.getElementById("type").value = "";
}

function displayProductOnScreen(productDetails) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(
        `${productDetails.sellingPrice} - ${productDetails.productName} - ${productDetails.typeOfProduct}`
    ));

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    listItem.appendChild(deleteBtn);

    const ul = document.querySelector('#productList'); // Update selector to match the ID of your unordered list
    ul.appendChild(listItem);

    deleteBtn.addEventListener("click", function (event) {
        ul.removeChild(listItem); // Update to remove the correct list item
    });
}
