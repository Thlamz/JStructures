import bindings from './assembly/output';

const exported = await bindings();

export const Heap = exported.Heap;
export const Deque = exported.Deque;
