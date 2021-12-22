import IHeap, {Comparable} from "./IHeap";

const { NumberHeap } = require("../assembly/build/output");

export default class CNumberHeap implements IHeap {
    private heap;
    constructor() {
        this.heap = new NumberHeap();
    }

    extract(): Comparable | void {
        if(this.size() == 0) {
            return;
        }
        return this.heap.extract();
    }

    insert(value: Comparable): void {
        this.heap.insert(value)
    }

    size(): number {
        return this.heap.size();
    }
}