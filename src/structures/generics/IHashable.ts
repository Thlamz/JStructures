import { IComparable } from './IComparable';

interface IHashableObject extends Object {
  readonly _hash: number;
}

interface IPrimitiveString {
  valueOf(): string;
}

export type IHashable = IHashableObject | IComparable | IPrimitiveString;
let _currentId = 0;
export function makeHashable(object: object): IHashable {
  if ('_hash' in object) {
    return <IHashableObject>object;
  }
  Object.defineProperty(object, '_hash', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: _currentId++
  });
  return <IHashableObject>object;
}
