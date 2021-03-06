import { IDeque } from './IDeque';
import { Deque } from '../bindings';
import { IAllocator, WasmAllocator } from '../../helpers/allocator';
export default class CDeque<T> implements IDeque<T> {
  private readonly deque;
  private readonly allocator: IAllocator;
  constructor(list: T[] = []) {
    this.allocator = new WasmAllocator();

    this.deque = new Deque();

    for (const element of list) {
      this.push(element);
    }
  }

  *[Symbol.iterator](): Iterator<T, undefined, undefined> {
    for (let i = 0; i < this.size; i++) {
      yield this.at(i)!;
    }
    return;
  }

  unshift(element: T): void {
    this.deque.unshift(this.allocator.allocate(element));
  }
  shift(): void | T {
    if (this.size == 0) {
      return;
    }
    return <T>this.allocator.deallocateRetrieve(this.deque.shift());
  }

  pop(): T | void {
    if (this.size == 0) {
      return;
    }
    return <T>this.allocator.deallocateRetrieve(this.deque.pop());
  }

  push(element: T): void {
    this.deque.push(this.allocator.allocate(element));
  }

  get size(): number {
    return this.deque.size();
  }

  at(index: number): T | void {
    const size = this.size;
    index = index >= 0 ? index : size + index;

    if (index < 0 || index >= this.size) {
      return;
    }
    return <T>this.allocator.retrieve(this.deque.at(index));
  }
}
