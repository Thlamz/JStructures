import { Heap } from '../assembly/output';
import { RepeatAllocator } from '../../helpers/allocator';
export default class CHeap {
    constructor(list = [], isMax = true) {
        this.isMax = isMax;
        this.heap = new Heap();
        this.allocator = new RepeatAllocator();
        for (const element of list) {
            this.insert(element);
        }
    }
    extract() {
        const pointer = this.heap.extract();
        if (pointer === -1) {
            return;
        }
        return this.allocator.deallocateRetrievePointer(pointer);
    }
    size() {
        return this.heap.size();
    }
    insert(element) {
        this.heap.insert(this.allocator.allocate(element), element.valueOf() * (this.isMax ? 1 : -1));
    }
}
