import bindings from './assembly/output';
let exported;
if ('default' in bindings) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  exported = await bindings.default();
} else {
  exported = await bindings();
}
export const Heap = exported.Heap;
export const Deque = exported.Deque;
export const ReferenceHandler = {
  release: exported._release,
  intern: exported._intern,
  handleValue: exported._handle_value
};
