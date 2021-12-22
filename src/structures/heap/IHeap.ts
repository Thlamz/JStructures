interface IHeap {
    insert(value: Comparable): void;
    extract(): Comparable | void;
    size(): number
}

export interface Comparable {
    valueOf(): number;
}

export default IHeap;
