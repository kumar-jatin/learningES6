let [id, name] = [10, 'Jatin'];
let licenseKey = 'LIC12345';

class Customer{
    format(){
        return this.id + ', ' + this.name;
    }
}

let customer = {
    id,
    name,
    [`_Prop${licenseKey}`]: 100,
    work() {
        return 'Success'
    },
    __proto__: new Customer()
};

console.log("enhanced object literals started");
console.log(customer instanceof Customer);
console.log(customer.format());
console.log(customer.work());
console.log(customer._PropLIC12345);
console.log("enhanced object literals ended");