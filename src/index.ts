// Importing wasm to make sure it's included in the webpack compilation
import './structures/assembly/output.wasm';
import { wasm } from './helpers/supportChecker';

const Heap = wasm
  ? (await import('./structures/heap/CHeap')).default
  : (await import('./structures/heap/JSHeap')).default;
const Deque = wasm
  ? (await import('./structures/deque/CDeque')).default
  : (await import('./structures/deque/JSDeque')).default;
export { Heap, Deque };
