export interface IStack<T> {
  push(element: T): void;
  pop(): T | void;
  size(): number;
}
