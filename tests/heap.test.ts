import Heap from "../src/structures/Heap";
import benchmark from "../src/helpers/benchmark";
import { expect } from 'chai';

let ARRAY_SIZE = 1e5;

let testArray: number[] = [];
for(let i = 0;i < ARRAY_SIZE;i++) {
    testArray.push(Math.random() * 1e8);
}

let sortedArray = benchmark(() => Array.from(testArray).sort((a,b) => b - a), "array sorting");
it('should use a heap to order an array', () => {
    let heap = benchmark(() => new Heap(testArray), "heap creation");

    for(let i=0;i < ARRAY_SIZE;i++) {
        expect(heap.extract()).equal(sortedArray[i])
    }
})

class ValuedObject {
    private readonly value: number;
    constructor(value: number) {
        this.value = value;
    }

    valueOf() {
        return this.value
    }
}
let valuedObjectArray = testArray.map(number => new ValuedObject(number))
it('should use a heap to order valued objects', () => {
    let heap = new Heap(valuedObjectArray);
    for(let i=0;i < ARRAY_SIZE;i++) {
        expect(heap.extract()!.valueOf()).equal(sortedArray[i])
    }
})