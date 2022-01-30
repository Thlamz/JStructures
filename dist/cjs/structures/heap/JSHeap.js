"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JSHeap {
    constructor(list = [], isMax = true) {
        this._heap = [];
        this.isMax = isMax;
        for (const element of list) {
            this.insert(element);
        }
    }
    insert(element) {
        this._heap.push(element);
        const index = this._heap.length - 1;
        this.push_up(index);
    }
    extract() {
        if (this.size() === 0) {
            return;
        }
        const extracted = this._heap[0];
        const lastElement = this._heap.pop();
        if (lastElement === extracted) {
            return extracted;
        }
        this._heap[0] = lastElement;
        this.push_down(0);
        return extracted;
    }
    size() {
        return this._heap.length;
    }
    push_down(index) {
        while (index < this._heap.length) {
            const left = this.getLeft(index);
            const right = this.getRight(index);
            let swapped = index;
            if (left < this._heap.length) {
                if (this.isMax) {
                    if (this._heap[left] > this._heap[swapped]) {
                        swapped = left;
                    }
                }
                else {
                    if (this._heap[left] < this._heap[swapped]) {
                        swapped = left;
                    }
                }
            }
            if (right < this._heap.length) {
                if (this.isMax) {
                    if (this._heap[right] > this._heap[swapped]) {
                        swapped = right;
                    }
                }
                else {
                    if (this._heap[right] < this._heap[swapped]) {
                        swapped = right;
                    }
                }
            }
            if (swapped !== index) {
                this.swap(index, swapped);
                index = swapped;
            }
            else {
                break;
            }
        }
    }
    push_up(index) {
        while (index >= 0) {
            const parentIndex = this.getParent(index);
            if (this.isMax) {
                if (this._heap[parentIndex] < this._heap[index]) {
                    this.swap(index, parentIndex);
                }
            }
            else {
                if (this._heap[parentIndex] > this._heap[index]) {
                    this.swap(index, parentIndex);
                }
            }
            index = parentIndex;
        }
    }
    getParent(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeft(index) {
        return Math.floor(2 * index + 1);
    }
    getRight(index) {
        return 2 * index + 2;
    }
    swap(x, y) {
        const temp = this._heap[x];
        this._heap[x] = this._heap[y];
        this._heap[y] = temp;
    }
}
exports.default = JSHeap;
