import { IDeque } from './IDeque';
export default class JSDeque<T> implements IDeque<T> {
    private head?;
    private tail?;
    private length;
    constructor(list?: T[]);
    at(index: number): void | T;
    pop(): void | T;
    push(element: T): void;
    shift(): void | T;
    unshift(element: T): void;
    get size(): number;
    [Symbol.iterator](): Iterator<T, undefined, undefined>;
}
