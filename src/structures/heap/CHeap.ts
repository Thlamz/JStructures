import IHeap , {IComparable} from "./IHeap";

const { Heap } = require("../../../build/output");

export default class CHeap<T extends IComparable> implements IHeap<T> {
    private heap;
    private readonly isMax
    private readonly elementList: Record<number, T>;
    private lastKey: number = 0;
    constructor(list: T[] = [], isMax: boolean = true) {
        this.isMax = isMax;
        this.heap = new Heap()
        this.elementList = {}

        for(let element of list) {
            this.insert(element)
        }
    }
    insert(value: T) {
        this.elementList[this.lastKey] = value

        // Inverting element if it is a min-heap
        this.heap.insert(this.lastKey, value.valueOf() * (this.isMax ? 1 : -1))
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
