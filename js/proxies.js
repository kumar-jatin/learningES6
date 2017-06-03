function processOrder(order){
    console.log('Order processing started');
    console.log('Order Data: ' + JSON.stringify(order));

    if(order.ammount >= 1000)
        console.log("Order status: PROCESSED");
    else
        console.log('Order status: ON-HOLD')

    return true;
}

function doWork(orderId){
    let order = {
        id: orderId,
        date: new Date(),
        ammount: 2300
    };

    processOrder(order);
}

Array.prototype.isExist = function(item){
    let status = false;
    if(item){
        for(let index in this)
        {
            if(this[index] === item){
                status = true;
                break;
            }
        }
    }
    return status;
}

//this assignment will change the existing implementation also
processOrder = new Proxy(processOrder,{
//if you want to retain existing behavior and proxies separate use let and call proxy method wherever needed    
// let processOrderProxy = new Proxy(processOrder,{
    apply: function(target, currentHandler, args) {
        let alreadyProcessedOrders = ['ORD101', 'ORD10101', 'ORD1023'];

        console.log('Proxying started');

        let orderId = args[0].id;

        if(alreadyProcessedOrders.isExist(orderId)){
            console.log('Order processing already done...');

            return true;
        }
        else{
            console.log('Object processing was not done earlier...');
            
            let status = target(...args);

            return status;
        }
    }
})

console.log("Proxy testing started....");
doWork('ORD1010101');
doWork('ORD10101');
console.log("Proxy testing ended....");