// ****** Classes *****


// ******* OOP Principles:
// ***  Encapsulation - приховування данних
// *** Inheritance - наслідування 
// *** Polymorphism

//  class Name {properties, methods , getters/setters, constructor }

class Product {
    //  private fields (access only from this class)
    #quantity;   // приватна змінна (є доступ в классі, поза межами НІ)
    // Properties 

    
//  static fields create only once for all instances 
    static count = 0;

    // constructor  -  initialize all required prop
    constructor(name, price, quantity) {
        // create prop
        this.name = name;
        this.price = price;
        this.rating = null;
        this.#quantity = quantity;
        this.inStock = quantity > 0 ? true : false;
        // access static fields
        Product.count++;
    }
    // methods
    show() {
        console.log(`Product: ${this.name}, ${this.price}$`);
    }
    showStatus() {
        console.log(`${this.name} is ${this.inStock ? 'in stock' : 'out of stock'}!`);
    }
    applyDiscount(value) {
        this.price -= this.price / 100 * value;
    }
    getTotalPrise() {
        return this.price * this.#quantity; 
    }
    setPrice(value) {
        if (value >= 0) // data validation
        this.price = value;
    }
    // static method 
    static getCount() {
        // does not have (this)
        return Product.count;
    }


    //  ***** get / set
    get total() {
        return this.price * this.#quantity; 
    }
    set quantity(value) {
         if (value >= 0)
        this.#quantity = value;
    }
} 


console.log("Products count:", Product.getCount());



// create class instance

let prod1 = new Product("Asus MG50", 11000, 5); // invoke ctor
// getter & setter as methods 
prod1.setPrice(12500);
prod1.setPrice(-100); // ignore

// getter & setter as properties
prod1.quantity = 6;
console.log("Total price:", prod1.total)


prod1.applyDiscount(15);
prod1.show();
prod1.showStatus();

console.log("Total price:", prod1.getTotalPrise());

let prod2 = new Product("Redeon RX 6600", 11499, 0); // invoke ctor
prod2.show();
prod2.showStatus();

let prod3 = new Product("AFOX PSI-ex", 1249, 2); // invoke ctor
prod3.show();
prod3.showStatus();

console.log("Products count:", Product.count);

//  =-=-=-=-=  Inheritance =-=-=-=-=-=

class Monitor extends Product {

    // super - reference to the base class (Product)

    constructor(name,price,quantity,resolution,diagonal,type) {
        
       super(name, price, quantity); // base ctor
       // create  new fields 
        this.resolution = resolution;
        this.diagonal = diagonal;
        this.type = type;


    }
    // all Product fields and methods already contains

    // override base method
    
    show() {
        super.show(); // base method
        console.log(`Screen: ${this.resolution}, ${this.type}`);
    }
    // add new methods 
    get ppi() {
        return this.diagonal * 2.5;
    }

}

const myMonitor = new Monitor("LG", 390, 4, "1920x1080", 21.5, "IPS");
myMonitor.quantity = 10;
console.log(`PPI: ${myMonitor.ppi} pixels per inch.`);
myMonitor.show();
// myMonitor.showStatus();
// console.log("Total price:", myMonitor.getTotalPrise() + "$");