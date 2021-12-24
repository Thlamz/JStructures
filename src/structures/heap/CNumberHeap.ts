import IHeap from './IHeap';

const { MaxNumberHeap, MinNumberHeap } = require('../assembly/output');

export default class CNumberHeap implements IHeap<number> {
  private heap;
  constructor(list: number[] = [], isMax = true) {
    if (isMax) {
      this.heap = new MaxNumberHeap(list);
    } else {
      this.heap = new MinNumberHeap(list);
    }
  }

  extract(): number | void {
    if (this.size() == 0) {
      return;
    }
    return this.heap.extract();
  }

  insert(value: number): void {
    this.heap.insert(value);
  }

  size(): number {
    return this.heap.size();
  }
}
