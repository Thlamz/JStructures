import Heap from "./Heap";

const bindings = require("../assembly/build/output");

class CHeap implements Heap {
    private heap;
    constructor(list: number[] = []) {
        this.heap = new bindings.Heap(list)
    }

    insert(value: number) {
        this.heap.insert(value);
    }

    extract() {
        return this.heap.extract();
    }
}

export default CHeap;
