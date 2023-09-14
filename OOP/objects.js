//   Objects **********


//   Create an Object

//  01 -  using new 
let order = new Object();

//  02 - using {}

let order1 = {
    discount: 15,
    quantity: 4,
    price: 1200
};


console.log("Order type:", typeof order);

// ==== add new properties

order.number = 10;
order.date = "20/2/2023";
order.client = "John Smith";
order.products = ["Apple", "Cherry", "Banana", "Pineapple"];
order.address = {
    city: "Rivne",
    street: "Soborna",
    building: "5a"
};

// --- override values

order1.price += 30;

// --- read object properties
//  01 - object.property
//  02 - object["property"]

console.log(`[${order.number}] ${order.client} ordered ${order.products.length} items!`);
console.log(`Client address: ${order.address.city}, ${order.address.street}`);

order.speed = 100;
//  delete existin prop

delete order.speed;

console.log("Value:", order.speed);


//  *** using object as a parameter 
function addNewItem(order, product) {
    order.products.push(product); 
     console.log("this in function:", this);
}
function showOrder(order) {
    console.log("Order:", order.number);
    console.log("Products:", order.products);

    console.log("this in function:", this);
}


addNewItem(order, "Lemon");
showOrder(order);


const coord = {
    x: 4,
    y: 9
};

const coords = [
    { x: 1, y: 4 },
    { x: 4, y: 0 },
    { x: 0, y: 8 }

];


console.log("X2:", coords[1].x);


//  --- get objects keys

console.warn("Order properties:")

for (const key in order) {
    console.log(key + ": " + order[key]);

}

// ******* Methods

const product = {
    name: "Radeon RX 6600",
    price: 11499,
    rating: 4.8,
    inStock: true,

    //  obj methods

//  apply discount: 15%
    applyDiscount: function (value) {
        // this -  reference to this obj
        this.price -= this.price / 100 * value;
        
        //   [this] is [product] 
        console.log("this in method:", this);
    

    }, 
    showPrice() {
        console.log(`Price: ${this.price}$`);
    }

};

console.log("this in global scope:", this);

product.showPrice();
product.applyDiscount(15);
product.showPrice();




