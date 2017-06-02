import { Customer } from './customer'
import { ObjectFormatter } from './formatutils'

class InternetCustomer extends Customer{
    constructor(id, name, address, credit, status, blogUrl){
        super(...arguments);

        this.blogUrl = blogUrl;
    }

    format(){
        return ObjectFormatter.format(this).toUpperCase();
    }
}

export{ InternetCustomer };