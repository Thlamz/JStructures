import IHeap, {Comparable} from "./IHeap";

const { Heap } = require("../assembly/build/output");

export default class CHeap implements IHeap {
    private heap;
    private elementList: Record<number, Comparable>;
    private lastKey: number = 0;
    constructor() {
        this.heap = new Heap()
        this.elementList = {}
    }
    insert(value: Comparable) {
        this.elementList[this.lastKey] = value
        this.heap.insert(this.lastKey, value.valueOf())
        this.lastKey++
    }
    extract(): Comparable | void {
        let key = this.heap.extract()
        if(key === -1) {
            return;
        }
        let value = this.elementList[key]
        delete this.elementList[key]
        return value
    }
    size(): number {
        return this.heap.size()
    }
}
