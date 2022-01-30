"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = exports.Heap = void 0;
const CHeap_1 = __importDefault(require("./structures/heap/CHeap"));
const JSHeap_1 = __importDefault(require("./structures/heap/JSHeap"));
const CDeque_1 = __importDefault(require("./structures/deque/CDeque"));
const JSDeque_1 = __importDefault(require("./structures/deque/JSDeque"));
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
const Heap = wasmSupported ? CHeap_1.default : JSHeap_1.default;
exports.Heap = Heap;
const Deque = wasmSupported ? CDeque_1.default : JSDeque_1.default;
exports.Deque = Deque;
