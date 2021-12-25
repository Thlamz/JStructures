import { IComparable } from './IComparable';

interface IHashableObject extends Object {
  readonly _hash: number;
}

interface NotIHashableObject extends Object {
  _hash: never;
}

export type IHashable = IHashableObject | IComparable;
let _currentId = 0;
export function makeHashable(object: NotIHashableObject): IHashable {
  Object.defineProperty(object, '_hash', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: _currentId++
  });
  return <IHashableObject>object;
}
