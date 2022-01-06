import { IStack } from './IStack';
import { Stack } from '../assembly/output';
import { RepeatAllocator } from '../../helpers/allocator';

export default class CStack<T> implements IStack<T> {
  private readonly stack;
  private readonly allocator: RepeatAllocator;
  constructor(list: T[]) {
    this.allocator = new RepeatAllocator();

    this.stack = new Stack();

    for (const element of list) {
      this.push(element);
    }
  }

  pop(): T | void {
    if (this.size() == 0) {
      return;
    }
    return <T>this.allocator.deallocateRetrievePointer(this.stack.pop());
  }

  push(element: T): void {
    this.stack.push(this.allocator.allocate(element));
  }

  size(): number {
    return this.stack.size();
  }
}
