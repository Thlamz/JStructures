import IHeap, { IComparable } from './IHeap';
declare class JSHeap<T extends IComparable> implements IHeap<T> {
    private readonly _heap;
    private readonly isMax;
    constructor(list?: T[], isMax?: boolean);
    insert(element: T): void;
    extract(): T | void;
    size(): number;
    private push_down;
    private push_up;
    private getParent;
    private getLeft;
    private getRight;
    private swap;
}
export default JSHeap;
