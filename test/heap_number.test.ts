import JSHeap from "../src/structures/heap/JSHeap";
import CHeap from "../src/structures/heap/CHeap";
import {benchmark, benchmarkAverage} from "../src/helpers/benchmark";
import {IComparable} from "../src/structures/heap/IHeap";
import assert from 'assert'
import CNumberHeap from "../src/structures/heap/CNumberHeap";

interface implementation {
    constructor: any,
    name: string
}
let implementations: implementation[] = [
    {constructor: JSHeap, name: "JSHeap"},
    {constructor: CHeap, name: "CHeap"},
    {constructor: CNumberHeap, name: "CNumberHeap"}
]

let ARRAY_SIZE = 1e7;
let testArray: number[] = [];
for (let i = 0; i < ARRAY_SIZE; i++) {
    testArray.push(Math.random() * 1e8);
}

// A sorted array should give the same result as a heap when removing elements one by one
let sortedArray = benchmark(() => Array.from(testArray).sort((a, b) => b - a), "array sorting");
implementations.forEach(({constructor, name}) => {
    describe(`Testing ${name} using numbers`, () => {

        let heap = new constructor();
        benchmark(() => {
            testArray.forEach(element => heap.insert(element))
        }, `${name} creation`);

        it('should have the correct size', () => {
            assert.equal(heap.size(), ARRAY_SIZE)
        })

        it('should use a heap to order an array', () => {

            let heapResult: IComparable[] = benchmarkAverage(testArray, () => {
                return heap.extract()
            }, `${name} extraction`)
            assert.deepStrictEqual(heapResult, sortedArray)
        })

        it('should return void when empty', () => {
            assert.equal(heap.extract(), null)
        })

        it('should have size 0 when empty', () => {
            assert.equal(heap.size(), 0)
        })
    })
})

