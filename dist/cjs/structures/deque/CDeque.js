"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const output_1 = require("../assembly/output");
const allocator_1 = require("../../helpers/allocator");
class CDeque {
    constructor(list = []) {
        this.allocator = new allocator_1.RepeatAllocator();
        this.deque = new output_1.Deque();
        for (const element of list) {
            this.push(element);
        }
    }
    *[Symbol.iterator]() {
        for (let i = 0; i < this.size; i++) {
            yield this.at(i);
        }
        return;
    }
    unshift(element) {
        this.deque.unshift(this.allocator.allocate(element));
    }
    shift() {
        if (this.size == 0) {
            return;
        }
        return this.allocator.deallocateRetrievePointer(this.deque.shift());
    }
    pop() {
        if (this.size == 0) {
            return;
        }
        return this.allocator.deallocateRetrievePointer(this.deque.pop());
    }
    push(element) {
        this.deque.push(this.allocator.allocate(element));
    }
    get size() {
        return this.deque.size();
    }
    at(index) {
        const size = this.size;
        index = index >= 0 ? index : size + index;
        if (index < 0 || index >= this.size) {
            return;
        }
        return this.allocator.retrieve(this.deque.at(index));
    }
}
exports.default = CDeque;
