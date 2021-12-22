const {
    performance
} = require('perf_hooks');


export function benchmark<ReturnType>(fn: () => ReturnType, tag: string = fn.toString()) : ReturnType {
    let start = performance.now();
    let value = fn();
    let end = performance.now();

    console.log(`Benchmarked ${tag} at ${end - start}ms`);
    return value;
}

export function benchmarkAverage<Iterated, ReturnType>(iterator: Array<Iterated>,
                                                       fn: (element: Iterated) => ReturnType,
                                                       tag: string = fn.toString()): ReturnType[] {
    let results: ReturnType[] = []
    let total: number = 0;
    for(let element of iterator) {
        let start = performance.now();
        results.push(fn(element))
        let end = performance.now();
        total += (end - start)
    }
    console.log(`Benchmarked ${tag} at an average of ${total/iterator.length}ms and total of ${total}ms`);
    return results
}