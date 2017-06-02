import { InternetCustomer } from './internetcustomer'

let customer = new InternetCustomer(
    10, "Jatin", "Gurgaon", 10000, true,
    "http://jatin.myblog.com");

console.log(customer.format());
console.log(customer instanceof InternetCustomer);

let customerCSVString = '10,JK,India,1000,true';
let anotherCustomer = InternetCustomer.createCustomer(customerCSVString);

console.log(anotherCustomer.format());