/// <reference types="emscripten" />

/** Above will import declarations from @types/emscripten, including Module etc. */

export class Heap {
  constructor();
  insert(element: number, number: number): void;
  extract(): number;
  size(): number;
}

export class MaxNumberHeap {
  constructor(list: number[]);
  insert(value: number): void;
  extract(): number;
  size(): number;
}

export class MinNumberHeap {
  constructor(list: number[]);
  insert(value: number): void;
  extract(): number;
  size(): number;
}
