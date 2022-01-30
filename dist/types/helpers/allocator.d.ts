export interface IAllocator {
    allocate(element: unknown): number;
    retrieve(pointer: number): unknown;
    deallocate(element: unknown): void;
    deallocateRetrievePointer(pointer: number): unknown;
}
export declare class UniqueAllocator implements IAllocator {
    private objectPointers;
    private pointerMemory;
    private freePointers;
    private pointer;
    constructor();
    allocate(element: unknown): number;
    retrieve(pointer: number): unknown | undefined;
    deallocate(element: unknown): void;
    deallocateRetrievePointer(pointer: number): unknown | undefined;
}
export declare class RepeatAllocator implements IAllocator {
    private pointerSpace;
    private freePointers;
    private pointer;
    constructor();
    allocate(element: unknown): number;
    deallocate(element: unknown): void;
    deallocateRetrievePointer(pointer: number): unknown;
    retrieve(pointer: number): unknown;
}
