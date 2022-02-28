// Importing wasm to make sure it's included in the webpack compilation
import './structures/assembly/output.wasm';

const wasmSupported = (() => {
  try {
    if (
      typeof WebAssembly === 'object' &&
      typeof WebAssembly.instantiate === 'function'
    ) {
      const module = new WebAssembly.Module(
        Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00)
      );
      if (module instanceof WebAssembly.Module)
        return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
    }
  } catch (e) {}
  return false;
})();

const Heap = wasmSupported
  ? (await import('./structures/heap/CHeap')).default
  : (await import('./structures/heap/JSHeap')).default;
const Deque = wasmSupported
  ? (await import('./structures/deque/CDeque')).default
  : (await import('./structures/deque/JSDeque')).default;
export { Heap, Deque };
