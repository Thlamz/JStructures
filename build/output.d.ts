/// <reference types="emscripten" />
/** Above will import declarations from @types/emscripten, including Module etc. */

import IHeap, {Comparable} from "../src/structures/heap/IHeap"


export namespace bindings {
    class Heap implements IHeap {
        protected constructor();
        abstract insert(element: number, number: number): void;
        abstract extract(): number;
        abstract size(): number
    }
    class NumberHeap implements IHeap {
        protected constructor();
        abstract insert(value: number): void;
        abstract extract(): number;
        abstract size(): number
    }
}

export interface StructureModule extends EmscriptenModule {
}

const bindings: StructureModule;
export default bindings;