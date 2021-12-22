import IHeap from "./IHeap";

const { NumberHeap } = require("../../../build/output");

export default class CNumberHeap implements IHeap<number> {
    private heap;
    constructor() {
        this.heap = new NumberHeap();
    }

    extract(): number | void {
        if(this.size() == 0) {
            return;
        }
        return this.heap.extract();
    }

    insert(value: number): void {
        this.heap.insert(value)
    }

    size(): number {
        return this.heap.size();
    }
}