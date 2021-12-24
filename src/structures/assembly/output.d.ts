/// <reference types="emscripten" />
/** Above will import declarations from @types/emscripten, including Module etc. */

export namespace bindings {
  abstract class Heap {
    protected constructor();
    abstract insert(element: number, number: number): void;
    abstract extract(): number;
    abstract size(): number;
  }
  abstract class MaxNumberHeap {
    protected constructor(list: number[]);
    abstract insert(value: number): void;
    abstract extract(): number;
    abstract size(): number;
  }

  abstract class MinNumberHeap {
    protected constructor(list: number[]);
    abstract insert(value: number): void;
    abstract extract(): number;
    abstract size(): number;
  }
}
