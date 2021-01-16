import additionFunction from "./sum";

export function means(values) {
    return additionFunction(values)/values.length;
}

export {additionFunction}

export * from "./operation";