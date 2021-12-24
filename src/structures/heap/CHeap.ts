import IHeap, { IComparable } from './IHeap';

const { Heap } = require('../assembly/output');

export default class CHeap<T extends IComparable> implements IHeap<T> {
  private heap;
  private readonly isMax;
  private readonly elementList: Record<number, T>;
  private lastKey = 0;
  constructor(list: T[] = [], isMax = true) {
    this.isMax = isMax;
    this.heap = new Heap();
    this.elementList = {};

    for (const element of list) {
      this.insert(element);
    }
  }
  insert(value: T) {
    this.elementList[this.lastKey] = value;

    // Inverting element if it is a min-heap
    this.heap.insert(this.lastKey, value.valueOf() * (this.isMax ? 1 : -1));
    this.lastKey++;
  }
  extract(): T | void {
    const key = this.heap.extract();
    if (key === -1) {
      return;
    }
    const value = this.elementList[key];
    delete this.elementList[key];
    return value;
  }
  size(): number {
    return this.heap.size();
  }
}
