import JSHeap from "../src/structures/heap/JSHeap";
import CHeap from "../src/structures/heap/CHeap";
import benchmark from "../src/helpers/benchmark";
import {expect} from 'chai';

let ARRAY_SIZE = 1e7;
let testArray: number[] = [];
for (let i = 0; i < ARRAY_SIZE; i++) {
    testArray.push(Math.random() * 1e8);
}



interface implementation {
    constructor: any,
    name: string
}

// A sorted array should give the same result as a heap when removing elements one by one
let sortedArray = benchmark(() => Array.from(testArray).sort((a, b) => b - a), "array sorting");
let implementations: implementation[] = [{constructor: JSHeap, name: "JSHeap"}, {constructor: CHeap, name: "CHeap"}]
implementations.forEach(({constructor, name}) => {
    describe(`Testing ${name} implementation`, () => {


        it('should use a heap to order an array', () => {
            let heap = benchmark(() => new constructor(testArray), `${name} creation`);

            let heapResult = []
            for (let i = 0; i < ARRAY_SIZE; i++) {
                heapResult.push(heap.extract())
            }
            expect(heapResult).deep.equal(sortedArray)
        })
    })
})

//
// class ValuedObject {
//     private readonly value: number;
//     constructor(value: number) {
//         this.value = value;
//     }
//
//     valueOf() {
//         return this.value
//     }
// }
// let valuedObjectArray = testArray.map(number => new ValuedObject(number))
// it('should use a heap to order valued objects', () => {
//     let heap = new Heap(valuedObjectArray);
//     for(let i=0;i < ARRAY_SIZE;i++) {
//         expect(heap.extract()!.valueOf()).equal(sortedArray[i])
//     }
// })