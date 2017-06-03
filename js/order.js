import { ObjectFormatter } from './formatutils'

class Order{
    constructor(orderId, orderDate, orderCost){
        [this.orderId, this.orderDate, this.orderCost] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export { Order };