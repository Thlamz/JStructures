/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function WrapperObject(): void;
declare class WrapperObject {
    constructor: typeof WrapperObject;
    __class__: typeof WrapperObject;
}
declare namespace WrapperObject {
    const __cache__: {};
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant)
    @param {*=} __class__ */
declare function getCache(__class__?: any | undefined): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant)
    @param {*=} __class__ */
declare function wrapPointer(ptr: any, __class__?: any | undefined): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function castObject(obj: any, __class__: any): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function destroy(obj: any): void;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function compare(obj1: any, obj2: any): boolean;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function getPointer(obj: any): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function getClass(obj: any): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function ensureString(value: any): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function ensureInt8(value: any): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function ensureInt16(value: any): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function ensureInt32(value: any): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function ensureFloat32(value: any): any;
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
declare function ensureFloat64(value: any): any;
/** @suppress {undefinedVars, duplicate} @this{Object} */ declare function VoidPtr(): void;
declare class VoidPtr {
    constructor: typeof VoidPtr;
    __class__: typeof VoidPtr;
    __destroy__: () => void;
}
declare namespace VoidPtr {
    const __cache___1: {};
    export { __cache___1 as __cache__ };
}
/** @suppress {undefinedVars, duplicate} @this{Object} */ declare function Heap(): void;
declare class Heap {
    ptr: any;
    constructor: typeof Heap;
    __class__: typeof Heap;
    insert: (element: any, value: any) => void;
    extract: () => any;
    size: () => any;
    __destroy__: () => void;
}
declare namespace Heap {
    const __cache___2: {};
    export { __cache___2 as __cache__ };
}
/** @suppress {undefinedVars, duplicate} @this{Object} */ declare function Deque(): void;
declare class Deque {
    ptr: any;
    constructor: typeof Deque;
    __class__: typeof Deque;
    push: (element: any) => void;
    unshift: (element: any) => void;
    pop: () => any;
    shift: () => any;
    size: () => any;
    at: (index: any) => any;
    __destroy__: () => void;
}
declare namespace Deque {
    const __cache___3: {};
    export { __cache___3 as __cache__ };
}
declare namespace ensureCache {
    const buffer: number;
    const size: number;
    const pos: number;
    const temps: never[];
    const needed: number;
    function prepare(): void;
    function alloc(array: any, view: any): any;
    function copy(array: any, view: any, offset: any): void;
}
