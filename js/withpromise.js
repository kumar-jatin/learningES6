const DEFAULT_TIMEOUT = 3000;
const VALID_VALUE = 100;
const SUCCESS = 'Success';
const FAILED = 'Failed';

class HeavyPromiseWorker{
    doHeavyWork(input){
        let workerPromise = new Promise(
                (resolve, reject) => {
                    //call async operation here
                    //if success, call resolve; else reject
                    setTimeout(() => {
                        let status = input > VALID_VALUE ? SUCCESS : FAILED;

                        if(status === SUCCESS){
                            console.log("resolve 1");
                            resolve({ status });
                        } else {
                            console.log("reject 1");
                            reject({ status });
                        }
                    }, DEFAULT_TIMEOUT);
                });
                return workerPromise;
    }
}

class HeavyPromiseWorker2{
    doHeavyWork(input){
        let workerPromise = new Promise(
                (resolve, reject) => {
                    //call async operation here
                    //if success, call resolve; else reject
                    setTimeout(() => {
                        let status = input > VALID_VALUE ? SUCCESS : FAILED;

                        if(status === SUCCESS){
                            console.log("resolve 2");
                            resolve({ status });
                        } else {
                            console.log("reject 2");
                            reject({ status });
                        }
                    }, DEFAULT_TIMEOUT);
                });
        return workerPromise;
    }
}

export { HeavyPromiseWorker, HeavyPromiseWorker2 };