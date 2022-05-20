//1. Design a cashier class
//takes in a customer object and handles food ordering on a first-come, first-served basis
//requires a customer name and order item for the order
//addOrder(customer): enqueues a customer object to be processed by deliverOrder()
//deliverOrder(): prints the name and order for the next customer to be processed

//cashier class should enqueue customer class objects with a queue and dequeue them when finished
function Customer(name, order) {
    this.name = name;
    this.order = order;
}

function Cashier() {
    this.customers = new Queue();
}

Cashier.prototype.addOrder = (customer) => {
    this.customers.enqueue(customer);
}

Cashier.prototype.deliverOrder = () => {
    var finishedCustomer = this.customers.dequeue();

    console.log(finishedCustomer.name + ", your" + finishedCustomer.order+" is ready!");
}

var cashier = new Cashier();
var customer1 = new Customer('Jim', "Fries");
var customer2 = new Customer('Sammie', "Burger");
var customer3 = new Customer('Peter', "Drink");

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder(); //Jim, your Fries is ready!
cashier.deliverOrder(); //Sammie, your Burger is ready!
cashier.deliverOrder(); //Peter, your Drink is ready!




//2. 
