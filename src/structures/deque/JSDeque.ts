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
      for (let i = this.length - 1; i > index; i--) {
        element = element.previous!;
      }
      return element.value;
    }
  }

  pop(): void | T {
    if (this.length > 0) {
      const value = this.tail!.value;
      this.tail = this.tail!.previous;
      this.length--;
      return value;
    }
    return;
  }

  push(element: T): void {
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

  shift(): void | T {
    if (this.length > 0) {
      const value = this.head!.value;
      this.head = this.head!.next;
      this.length--;
      return value;
    }
    return;
  }

  unshift(element: T): void {
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

  get size(): number {
    return this.length;
  }

  *[Symbol.iterator](): Iterator<T, undefined, undefined> {
    let element = this.head;
    for (let i = 0; i < this.size; i++) {
      yield element!.value;
      element = element?.next;
    }
    return;
  }
}
