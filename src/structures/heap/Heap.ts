interface Heap {
    insert(value: number): void;
    extract(): number | void;
}

export default Heap;