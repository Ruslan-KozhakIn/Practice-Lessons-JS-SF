//  -----------get elements
const createBtn = document.getElementById('createBtn');
const clearBtn = document.getElementById('clearBtn');
const tableBody = document.querySelector('#productTable tbody');
// -------- get forms
const form = document.forms.creationForm;
const nameIn = form.elements.name;
const priceIn = form.elements.price;
const statusCb = form.elements.status;

// create product class
class Product {
    static number = 4;
    constructor(name, price, status = true) {
        this.name = name;
        this.price = price < 0 ? 0 : price; // validation 
        this.status = status; 
        this.id = Product.number++
    }
};



// --------- add ivent handler
createBtn.onclick = () => {

    //  input.value - content of the input
    //  checkbox.checked - status of the checkbox
    

    // let item = {
    //     id: 1,
    //     name: nameIn.value,
    //     price: priceIn.value,
    //     status: statusCb.checked  // boolean
    // };
    const item = new Product(nameIn.value, priceIn.value, statusCb.checked);

    console.log(item);
    
    // add item to table
    tableBody.innerHTML += `<tr>
                             <td>${item.id}</td>
                             <td>${item.name}</td>
                             <td>${item.price}</td>
                             <td>${item.status ? 'In Stock' : 'Out of Stock'}</td>
                            </tr>`;
    
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
    // reset product start number
    Product.number = 1;
}


