import IHeap, { IComparable } from './IHeap';
export default class CHeap<T extends IComparable> implements IHeap<T> {
    private readonly isMax;
    private readonly heap;
    private readonly allocator;
    constructor(list?: T[], isMax?: boolean);
    extract(): void | T;
    size(): number;
    insert(element: T): void;
}
