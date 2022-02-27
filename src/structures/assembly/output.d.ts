/// <reference types="emscripten" />
import IHeap, { IComparable } from '../heap/IHeap';

/** Above will import declarations from @types/emscripten, including Module etc. */

declare class Heap {
  constructor();
  insert(element: number, value: number): void;
  extract(): number;
  size(): number;
}

declare class Deque {
  constructor();
  push(element: number): void;
  unshift(element: number): void;
  pop(): number;
  shift(): number;
  size(): number;
  at(index: number): number;
}

declare interface bindings {
  Heap: typeof Heap;
  Deque: typeof Deque;
}

export default function (): Promise<bindings>;
