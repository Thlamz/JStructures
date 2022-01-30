import CHeap from './structures/heap/CHeap';
import JSHeap from './structures/heap/JSHeap';
import CDeque from './structures/deque/CDeque';
import JSDeque from './structures/deque/JSDeque';
const wasmSupported = (() => {
    try {
        if (typeof WebAssembly === 'object' &&
            typeof WebAssembly.instantiate === 'function') {
            const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
            if (module instanceof WebAssembly.Module)
                return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
        }
    }
    catch (e) { }
    return false;
})();
const Heap = wasmSupported ? CHeap : JSHeap;
const Deque = wasmSupported ? CDeque : JSDeque;
export { Heap, Deque };
