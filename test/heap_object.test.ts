import {Comparable} from "../src/structures/heap/IHeap";
import assert from "assert";
import JSHeap from "../src/structures/heap/JSHeap";
import CHeap from "../src/structures/heap/CHeap";

interface implementation {
    constructor: any,
    name: string
}
let implementations: implementation[] = [
    {constructor: JSHeap, name: "JSHeap"},
    {constructor: CHeap, name: "CHeap"}
]

class ValuedObject {
    private readonly value: number;
    constructor(value: number) {
        this.value = value;
    }

    valueOf() {
        return this.value
    }
}

let OBJECT_ARRAY_SIZE = 1e4
let valuedObjectArray: ValuedObject[] = []
for (let i = 0; i < OBJECT_ARRAY_SIZE; i++) {
    valuedObjectArray.push(new ValuedObject(Math.random() * 1e8));
}

let sortedObjectArray = Array.from(valuedObjectArray).sort((a, b) => b.valueOf() - a.valueOf())
implementations.forEach(({constructor, name}) => {
    describe(`Testing ${name} using objects`, () => {
        let heap = new constructor();
        valuedObjectArray.forEach(element => heap.insert(element))
        it('should use a heap to order valued objects', () => {

            let heapResult: Comparable[] = []
            let firstValue: Comparable = heap.extract()
            heapResult.push(firstValue);
            for (let i = 1; i < OBJECT_ARRAY_SIZE; i++) {
                heapResult.push(heap.extract())
            }
            assert.deepStrictEqual(heapResult, sortedObjectArray)
        })
    })
})