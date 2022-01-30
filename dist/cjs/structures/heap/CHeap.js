"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const output_1 = require("../assembly/output");
const allocator_1 = require("../../helpers/allocator");
class CHeap {
    constructor(list = [], isMax = true) {
        this.isMax = isMax;
        this.heap = new output_1.Heap();
        this.allocator = new allocator_1.RepeatAllocator();
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
exports.default = CHeap;
