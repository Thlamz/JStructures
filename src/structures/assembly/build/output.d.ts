/// <reference types="emscripten" />
/** Above will import declarations from @types/emscripten, including Module etc. */

// This will merge to the existing EmscriptenModule interface from @types/emscripten
// If this doesn't work, try globalThis.EmscriptenModule instead.



export namespace bindings {
    class VectorDouble {
        protected abstract constructor(): VectorStructure;
        abstract push_back(value: double): void;
    }

    class Heap {
        protected abstract constructor(list: VectorStructure): HeapStructure;
        abstract insert(double): void;
        abstract extract(): number;
        abstract size(): number
    }
}

export interface StructureModule extends EmscriptenModule {
}

const bindings: StructureModule;
export default bindings;