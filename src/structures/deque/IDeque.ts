export interface IDeque<T> {
  push(element: T): void;
  unshift(element: T): void;
  pop(): T | void;
  shift(): T | void;
  size(): number;
  at(index: number): T | void;
}
