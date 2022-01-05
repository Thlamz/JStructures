import IHeap, { IComparable } from './IHeap';
import { Heap } from '../assembly/output';

export default class CHeap<T extends IComparable> implements IHeap<T> {
  private readonly isMax: boolean;
  private readonly heap: Heap;
  private pointer = 0;
  private ptrArray: T[] = [];
  constructor(list: T[] = [], isMax = true) {
    this.heap = new Heap();
    this.isMax = isMax;

    for (const element of list) {
      this.insert(element);
    }
  }

  extract(): void | T {
    const pointer = this.heap.extract();
    if (pointer === -1) {
      return;
    }
    return this.ptrArray[pointer];
  }

  size(): number {
    return this.heap.size();
  }

  insert(element: T) {
    this.ptrArray[this.pointer] = element;
    this.heap.insert(this.pointer, element.valueOf() * (this.isMax ? 1 : -1));
    this.pointer++;
  }
}
