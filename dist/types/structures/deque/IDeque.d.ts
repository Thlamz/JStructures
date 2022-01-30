export interface IDeque<T> extends Iterable<T> {
    push(element: T): void;
    unshift(element: T): void;
    pop(): T | void;
    shift(): T | void;
    size: number;
    at(index: number): T | void;
    [Symbol.iterator](): Iterator<T, undefined, undefined>;
}
