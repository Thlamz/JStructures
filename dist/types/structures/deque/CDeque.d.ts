import { IDeque } from './IDeque';
export default class CDeque<T> implements IDeque<T> {
    private readonly deque;
    private readonly allocator;
    constructor(list?: T[]);
    [Symbol.iterator](): Iterator<T, undefined, undefined>;
    unshift(element: T): void;
    shift(): void | T;
    pop(): T | void;
    push(element: T): void;
    get size(): number;
    at(index: number): T | void;
}
