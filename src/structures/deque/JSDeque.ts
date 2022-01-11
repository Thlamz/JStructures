import { IDeque } from './IDeque';

interface Node<T> {
  previous?: Node<T>;
  next?: Node<T>;
  value: T;
}

export default class JSDeque<T> implements IDeque<T> {
  private head?: Node<T>;
  private tail?: Node<T>;
  private length = 0;

  constructor(list: T[] = []) {
    for (const element of list) {
      this.push(element);
    }
  }

  at(index: number): void | T {
    index = index < 0 ? this.length + index : index;
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index < this.length - index) {
      let element = this.head!;
      for (let i = 0; i < index; i++) {
        element = element.next!;
      }
      return element?.value;
    } else {
      let element = this.tail!;
      for (let i = 0; i < this.length - index; i++) {
        element = element.previous!;
      }
      return element.value;
    }
  }

  pop(): void | T {
    if (this.length > 0) {
      const value = this.tail?.value;
      this.tail = this.tail?.previous;
      this.length--;
      if (value) {
        return value;
      }
    }
    return;
  }

  push(element: T): void {
    this.tail = {
      previous: this.tail,
      value: element
    };
    this.length++;
  }

  shift(): void | T {
    if (this.length > 0) {
      const value = this.tail?.value;
      this.head = this.tail?.next;
      this.length--;
      if (value) {
        return value;
      }
    }
    return;
  }

  unshift(element: T): void {
    this.head = {
      next: this.head,
      value: element
    };
    this.length++;
  }

  get size(): number {
    return this.length;
  }

  *[Symbol.iterator](): Iterator<T, undefined, undefined> {
    for (let i = 0; i < this.size; i++) {
      yield this.at(i)!;
    }
    return;
  }
}
