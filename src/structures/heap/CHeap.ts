import IHeap, {IComparable} from "./IHeap";

const { Heap } = require("../../../build/output");

export default class CHeap<T extends IComparable> implements IHeap<T> {
    private heap;
    private readonly elementList: Record<number, T>;
    private lastKey: number = 0;
    constructor() {
        this.heap = new Heap()
        this.elementList = {}
    }
    insert(value: T) {
        this.elementList[this.lastKey] = value
        this.heap.insert(this.lastKey, value.valueOf())
        this.lastKey++
    }
    extract(): T | void {
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
