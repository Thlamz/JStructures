"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JSDeque {
    constructor(list = []) {
        this.length = 0;
        for (const element of list) {
            this.push(element);
        }
    }
    at(index) {
        index = index < 0 ? this.length + index : index;
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index < this.length - index) {
            let element = this.head;
            for (let i = 0; i < index; i++) {
                element = element.next;
            }
            return element === null || element === void 0 ? void 0 : element.value;
        }
        else {
            let element = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                element = element.previous;
            }
            return element.value;
        }
    }
    pop() {
        if (this.length > 0) {
            const value = this.tail.value;
            this.tail = this.tail.previous;
            this.length--;
            return value;
        }
        return;
    }
    push(element) {
        const node = {
            previous: this.tail,
            value: element
        };
        if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        if (this.size === 0) {
            this.head = this.tail;
        }
        this.length++;
    }
    shift() {
        if (this.length > 0) {
            const value = this.head.value;
            this.head = this.head.next;
            this.length--;
            return value;
        }
        return;
    }
    unshift(element) {
        const node = {
            next: this.head,
            value: element
        };
        if (this.head) {
            this.head.previous = node;
        }
        this.head = node;
        if (this.size === 0) {
            this.tail = this.head;
        }
        this.length++;
    }
    get size() {
        return this.length;
    }
    *[Symbol.iterator]() {
        let element = this.head;
        for (let i = 0; i < this.size; i++) {
            yield element.value;
            element = element === null || element === void 0 ? void 0 : element.next;
        }
        return;
    }
}
exports.default = JSDeque;
