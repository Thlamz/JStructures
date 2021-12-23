import IHeap from "./IHeap";

const { NumberHeap } = require("../../../build/output");

export default class CNumberHeap implements IHeap<number> {
    private heap;
    private readonly isMax;
    constructor(list: number[] = [], isMax: boolean = true) {
        if(!isMax) {
            list = list.map(n => -n)
        }
        this.heap = new NumberHeap(list);
        this.isMax = isMax;
    }

    extract(): number | void {
        if(this.size() == 0) {
            return;
        }
        return this.heap.extract() * (this.isMax ? 1 : -1);
    }

    insert(value: number): void {
        this.heap.insert(value * (this.isMax ? 1 : -1));
    }

    size(): number {
        return this.heap.size();
    }
}