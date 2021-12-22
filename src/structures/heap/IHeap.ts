export interface IComparable {
    valueOf(): number;
}


interface IHeap<T extends  IComparable> {
    insert(value: T): void;
    extract(): T | void;
    size(): number
}

export default IHeap;
