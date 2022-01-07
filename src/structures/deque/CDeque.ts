import { IDeque } from './IDeque';
import { Deque } from '../assembly/output';
import { RepeatAllocator } from '../../helpers/allocator';

export default class CDeque<T> implements IDeque<T> {
  private readonly deque;
  private readonly allocator: RepeatAllocator;
  constructor(list: T[] = []) {
    this.allocator = new RepeatAllocator();

    this.deque = new Deque();

    for (const element of list) {
      this.push(element);
    }
  }

  unshift(element: T): void {
    this.deque.unshift(this.allocator.allocate(element));
  }
  shift(): void | T {
    if (this.size() == 0) {
      return;
    }
    return <T>this.allocator.deallocateRetrievePointer(this.deque.shift());
  }

  pop(): T | void {
    if (this.size() == 0) {
      return;
    }
    return <T>this.allocator.deallocateRetrievePointer(this.deque.pop());
  }

  push(element: T): void {
    this.deque.push(this.allocator.allocate(element));
  }

  size(): number {
    return this.deque.size();
  }
}
