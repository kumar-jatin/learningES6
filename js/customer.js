import { ObjectFormatter } from './formatutils'
import { Order } from './order'
// import 'regenerator-runtime/runtime';

const COL_SEPARATOR = ",";
//this will be used to make orders private and not avialable for serialization
const ORDERS_SYMBOL = Symbol("Orders Symbol");
class Customer {
    constructor(id, name, address, credit, status) {
        [this.id, this.name, this.address, 
            this.credit, this.status] = arguments;
        //this is publically available and serializable
        // this.orders = [];

        //to make order non-serializable
        //prefer to use square brackets to access because it's name can have anything like -, space, number etc
        this[ORDERS_SYMBOL] = [];
    }

    format(){
        return ObjectFormatter.format(this);
    }

    addOrder(order){
        if(order) {
            // this.orders.push(order);
            this[ORDERS_SYMBOL].push(order);
        }
    }

    getOrders(){
        // return this.orders;
        return this[ORDERS_SYMBOL];
    }

    //To make an object iteratable, we must use this
    //using this we can iterate over customer object
    *[Symbol.iterator]() {
        // for(let order of this.orders)
        for(let order of this[ORDERS_SYMBOL])
            yield order;
    }

    static createCustomer(csvString) {
        let customer = null;

        if(csvString) {
            let splittedString = csvString.split(COL_SEPARATOR);

            customer = new Customer(...splittedString);
        }

        return customer;
    }
}

export { Customer };
