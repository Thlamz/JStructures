import CHeap from './structures/heap/CHeap';
import JSHeap from './structures/heap/JSHeap';
import CDeque from './structures/deque/CDeque';
import JSDeque from './structures/deque/JSDeque';
declare const Heap: typeof CHeap | typeof JSHeap;
declare const Deque: typeof CDeque | typeof JSDeque;
export { Heap, Deque };
