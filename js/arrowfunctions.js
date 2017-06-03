class DataProcessor {
    //demo of rest parameters
    process(...callbacks){
        let result = 0;

        for(let index in callbacks){
            let callback = callbacks[index];
            let validation = callback && typeof callback === 'function';
            let[inputA, inputB] = [10, 20];

            if(validation){
                result += callback(inputA, inputB);
            }
        }

        // return result;

        this.result = result;

        //this will give error because this is undefined in the context
        //to resolve this use arrow function to use lexical this pointer
        // return function(){
        //     return this.result;
        // }
        return () => this.result;
    }
}

export { DataProcessor };