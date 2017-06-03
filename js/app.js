import { InternetCustomer } from './internetcustomer'
import { Order } from './order'
import { DataProcessor } from './arrowfunctions'
import {HeavyWorker, HeavyWorker2} from './withoutpromises'
import * as PromiseWorkers from './withpromise'
import './enhancedobjliterals'
import './proxies'

let customer = new InternetCustomer(
    10, "Jatin", "Gurgaon", 10000, true,
    "http://jatin.myblog.com");

console.log(customer.format());
console.log(customer instanceof InternetCustomer);

let customerCSVString = '10,JK,India,1000,true';
let anotherCustomer = InternetCustomer.createCustomer(customerCSVString);

anotherCustomer.addOrder(new Order(1, new Date(), 1000));
anotherCustomer.addOrder(new Order(2, new Date(), 2000));
anotherCustomer.addOrder(new Order(3, new Date(), 3000));
anotherCustomer.addOrder(new Order(4, new Date(), 4000));
anotherCustomer.addOrder(new Order(5, new Date(), 5000));

console.log(anotherCustomer.format());

//we are getting array of orders first
//then we are using for of loop
//array has it's iterator implementation
//so, it will work
for(let order of anotherCustomer.getOrders())
    console.info(order.toString());

console.info('Iterating customer object directly ...');

//We don't have custom iterator from customers class
//for of loop will give error

//Uncaught TypeError: anotherCustomer[Symbol.iterator] is not a function
//    at Object.defineProperty.value (app.bundle.js:277)
//   at __webpack_require__ (bootstrap e8b6abf…:19)
//    at Object.defineProperty.value (bootstrap e8b6abf…:65)
//   at bootstrap e8b6abf…:65


// for(let property of anotherCustomer)
//     console.info(property + ', ' + anotherCustomer[property]);

//After creating custom ierator, we will get following error
/*Uncaught ReferenceError: regeneratorRuntime is not defined
    at app.bundle.js:366
    at Object.<anonymous> (app.bundle.js:451)
    at __webpack_require__ (bootstrap e8b6abf…:19)
    at Object.<anonymous> (valueprovider.js:17)
    at __webpack_require__ (bootstrap e8b6abf…:19)
    at Object.defineProperty.value (app.bundle.js:219)
    at __webpack_require__ (bootstrap e8b6abf…:19)
    at Object.defineProperty.value (bootstrap e8b6abf…:65)*/
//To resolve this add babal-polyfill as entry point in webpack.config or look at the commented import in customer.js
for(let order of anotherCustomer)
    console.log(order.toString());

//demonstration of arrow functions
let dataProcessor = new DataProcessor();
let result = dataProcessor.process(
    (a,b) => a+b,
    function(a,b){
        return a -b;
     },
     (a,b) => {
       console.log("Arrow function with block ...");

       return a * b;
    }
);
// console.log("Arrow " + result);
console.log(result());

let worker1 = new HeavyWorker();
let worker2 = new HeavyWorker2();

//multiple async ops but sequentially
//UI wait time is more in the scenario
worker1.doHeavyWork(10, 
    (result) => {
        console.log('Worker 1 completed ...' + JSON.stringify(result));

        worker2.doHeavyWork(300, (result) => {
            console.log('Worker 2 completed ...' + JSON.stringify(result));
        })
    })

let promiseWorker1 = new PromiseWorkers.HeavyPromiseWorker();
let promiseWorker2 = new PromiseWorkers.HeavyPromiseWorker2();
let input = 200;
// muliple async jobs in parallel using promises
//Promise.all ------- Promise.race

//data callback will be called when all the promises are completed
// resolve 1
// resolve 2
// Both successfully completed ... [{"status":"Success"},{"status":"Success"}]

// error will be called as soon as any one reject of promise is called
// reject 1
// One of the worker failed ... {"status":"Failed"}
// reject 2
Promise.all(
    [
        promiseWorker1.doHeavyWork(input),
        promiseWorker2.doHeavyWork(input)
    ]).then(
        data => console.log("Both successfully completed ... " + JSON.stringify(data)),
        error => console.log("One of the worker failed ... " + JSON.stringify(error)));