export interface IDeque<T> {
  push(element: T): void;
  shift(element: T): void;
  pop(): T | void;
  unshift(): T | void;
  size(): number;
}
