import additionFunction from "./sum";

export function means(values) {
    return additionFunction(values)/values.length;
}




//get data from network
export function asyncAdd(values) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            let total = additionFunction(values);
            console.log(`Async Total : ${total}`);
            resolve(total);
          },2000);
    });
    
  }

  export {additionFunction}

export * from "./operation";