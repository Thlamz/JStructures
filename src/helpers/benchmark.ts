const {
    performance
} = require('perf_hooks');


function benchmark<ReturnType>(fn: () => ReturnType, tag: string = fn.toString()) : ReturnType {
    let start = performance.now();
    let value = fn();
    let end = performance.now();

    console.log(`Benchmarked ${tag} at ${end - start}ms`);
    return value;
}

export default benchmark;