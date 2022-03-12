import IHeap, { IComparable } from './IHeap';
import { Heap } from '../bindings';
import { IAllocator, WasmAllocator } from '../../helpers/allocator';

export default class CHeap<T extends IComparable> implements IHeap<T> {
  private readonly isMax: boolean;
  private readonly heap;
  private readonly allocator: IAllocator;
  constructor(list: T[] = [], isMax = true) {
    this.isMax = isMax;
    this.heap = new Heap();
    this.allocator = new WasmAllocator();

    for (const element of list) {
      this.insert(element);
    }
  }

  extract(): void | T {
    const pointer = this.heap.extract();
    if (pointer === -1) {
      return;
    }
    return <T>this.allocator.deallocateRetrieve(pointer);
  }

  size(): number {
    return this.heap.size();
  }

  insert(element: T) {
    this.heap.insert(
      this.allocator.allocate(element),
      element.valueOf() * (this.isMax ? 1 : -1)
    );
  }
}
