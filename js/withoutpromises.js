const DEFAULT_TIMEOUT = 3000;

class HeavyWorker{
    doHeavyWork(input, callback){
        setTimeout(() => {
            let status = 'FAILED';

            if(input > 100){
                status = 'SUCCESS';
            }

            if(typeof callback === 'function'){
                callback({
                    status //enhanced object literals
                });
            }
        }, DEFAULT_TIMEOUT);

    }
}

class HeavyWorker2{
    doHeavyWork(input, callback){
        setTimeout(() => {
            let status = 'FAILED';

            if(input > 200){
                status = 'SUCCESS';
            }

            if(typeof callback === 'function'){
                callback({
                    status //enhanced object literals
                });
            }
        }, DEFAULT_TIMEOUT);

    }
}

export { HeavyWorker, HeavyWorker2 };